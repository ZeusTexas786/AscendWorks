"""Find current ServiceNow announcements that merit an editorial review issue."""

from __future__ import annotations

import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from html import unescape

FEEDS = (
    ("ServiceNow Blog", "https://www.servicenow.com/blogs.rss"),
    (
        "ServiceNow Community — AI and Now Assist",
        "https://www.servicenow.com/community/now-assist-articles/tkb-p/now-assist-articles/rss",
    ),
)

RELEVANT = re.compile(
    r"\b(release|released|what.s new|now available|general availability|"
    r"otto|moveworks|ai control tower|flow designer|now assist|ai agent|"
    r"platform update|upgrade|store app)\b",
    re.IGNORECASE,
)


def clean(value: str) -> str:
    value = re.sub(r"<[^>]+>", " ", value or "")
    return re.sub(r"\s+", " ", unescape(value)).strip()


def child_text(element: ET.Element, *names: str) -> str:
    for child in element:
        if child.tag.rsplit("}", 1)[-1] in names:
            if child.tag.rsplit("}", 1)[-1] == "encoded":
                return "".join(child.itertext()).strip()
            return "".join(child.itertext()).strip()
    return ""


def read_feed(name: str, url: str) -> list[dict[str, str]]:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "AscendWorksNow-ReleaseMonitor/1.0", "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        root = ET.fromstring(response.read())

    entries: list[dict[str, str]] = []
    for node in root.iter():
        kind = node.tag.rsplit("}", 1)[-1]
        if kind not in {"item", "entry"}:
            continue
        title = clean(child_text(node, "title"))
        description = clean(child_text(node, "description", "summary", "content", "encoded"))
        link = child_text(node, "link")
        if not link:
            for child in node:
                if child.tag.rsplit("}", 1)[-1] == "link":
                    link = child.attrib.get("href", "")
                    if link:
                        break
        date = clean(child_text(node, "pubDate", "published", "updated"))
        if title and link and RELEVANT.search(f"{title} {description}"):
            entries.append({"source": name, "title": title, "date": date, "url": link, "summary": description[:700]})
    return entries


def main() -> int:
    candidates: list[dict[str, str]] = []
    errors: list[str] = []
    for name, url in FEEDS:
        try:
            candidates.extend(read_feed(name, url))
        except Exception as exc:  # feed failures should be visible, not silently hidden
            errors.append(f"{name}: {type(exc).__name__}: {exc}")

    result = {"candidates": candidates, "errors": errors}
    print(json.dumps(result, ensure_ascii=False))
    return 1 if errors and not candidates else 0


if __name__ == "__main__":
    sys.exit(main())
