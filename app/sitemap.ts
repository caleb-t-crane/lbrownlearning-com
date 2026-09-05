import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

const ROUTES = [
  "/",
  "/about",
  "/our-programs",
  "/our-programs/sales-route-management",
  "/our-programs/leadership-management",
  "/our-programs/personal-productivity",
  "/our-programs/product-knowledge",
  "/working-with-us",
  "/photo-gallery",
  "/resources",
  "/contact-us"
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: route === "/" ? SITE_URL + "/" : SITE_URL + route + "/",
    lastModified: now,
    priority: route === "/" ? 1 : 0.7,
  }));
}
