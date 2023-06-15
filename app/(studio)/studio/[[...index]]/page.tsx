"use client";
//  This route is responsible for the built-in authoring environment using Sanity Studio.
//  All routes under the studio path is handled by this file using Next.js' catch-all routes:

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
