# Website Refresh Decisions

## 2026-10-05 — ServiceNow-focused refresh and release-monitor review

### Adopted

- Reframed the homepage around ServiceNow platform advisory and delivery rather than generic enterprise-transformation claims.
- Replaced hero metrics, floating glow treatments, the Knowledge26 news carousel, and glass-heavy service cards with a restrained two-column architecture illustration, editorial hierarchy, and simpler capability cards.
- Explicitly feature ServiceNow AI Control Tower, ServiceNow Otto (Moveworks), Flow Designer, Now Assist, and AI agents. Use product names to explain implementation decisions, not to imply a ServiceNow/Moveworks partnership or customer results.
- Reworked the Control Tower feature and landing page around ServiceNow's published discover, secure, govern, observe, and measure scope. Removed unsupported incident-risk/reporting features and performance figures.
- Removed made-up testimonial names/quotes, unsupported case-study metrics, unverified partner/certification logo panels, the Knowledge26 drawer, and unverified generated article routes from the public build. Replaced the homepage proof section with delivery standards and the case-studies route with a transparent evidence policy until approved client material is supplied.
- Replaced the AscendOS delivery comparison chart (illustrative six-week/30% claims) with a qualitative split between agent-prepared work and human decisions.
- Replaced the Insights page with a source-linked product guide for AI Control Tower, ServiceNow Otto/Moveworks, Flow Designer, and Now Assist. Knowledge26 is no longer presented as live.
- Updated cookie-policy draft text to remove descriptions of the retired local-storage widget.
- Added the VS Code custom agent `.github/agents/servicenow-release-monitor.agent.md` and a three-hour GitHub Actions feed watcher. It creates review issues only; the agent can propose a pull request, and a person still reviews, merges, builds, and publishes to IONOS.

### Deliberately not adopted

- No invented outcome metrics, fixed deployment guarantees, or unverified certification/partner claims in the redesigned hero and product sections.
- No copied vendor marketing page or unlicensed product logos.
- No automatic edits, merge, static export, or IONOS deployment from the scheduled watcher.

### Follow-up before release-monitor go-live

- **Official RSS endpoints need repair.** The existing ServiceNow blog feed returned HTTP 404 during local validation; the existing AI/Now Assist Community RSS URL returned non-feed content. The watcher will open one actionable issue and log feed errors rather than silently claiming it is current. Replace the URLs in `scripts/monitor_release_feeds.py` with verified public official feeds/APIs before relying on release alerts. Do not substitute page scraping or an unlicensed commercial aggregator.
- Some remaining industry and service pages still contain unverified quantitative results or certification claims. Audit them against company records and obtain permission for any customer story before restoring case studies or outcome figures.
- The case-studies route is intentionally a holding page until verified examples and client approvals are supplied. Replace it before launch if approved case material is available.
- `npm run lint` still reports seven unrelated JSX-escaping errors in Careers and Opportunity, plus four unused-import warnings in those files. The production static build and TypeScript compilation pass.
- This working tree already contains many uncommitted changes on `feature/awn-ascendos-merge`. Preserve that branch and do not push or deploy without explicit approval.
