import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemaTypes from "./sanity/schemas";

const config = defineConfig({
  title: "Portfolio Website",

  projectId: "03t4orrk",

  dataset: "production",

  apiVersion: "2023-06-09",

  basePath: "/studio",

  plugins: [deskTool()],

  schema: { types: schemaTypes },
});
export default config;
