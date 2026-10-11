import type { MetadataRoute } from "next";

const SITE = "https://www.ascendworksnow.com";

export const dynamic = "force-static";

/** Static routes, highest-value first. */
const ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/solutions/ai-control-tower", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/servicenow", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/agentic-ai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/itsm", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/architecture", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/advisory", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/staffing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/energy", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/financial", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/healthcare", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/technology", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.6, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/careers/opportunity", priority: 0.5, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${SITE}${r.path}`,
    priority: r.priority,
    changeFrequency: r.changeFrequency,
  }));

  // every insight article that gets a generated detail page
  return staticEntries;
}
