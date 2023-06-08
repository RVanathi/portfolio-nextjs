/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\sanity\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import { apiVersion, dataset, projectId } from "./sanity/.env
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/sanity",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: { types: schemaTypes },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
  ],
});
