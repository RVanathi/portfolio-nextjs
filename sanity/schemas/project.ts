const project = {
  name: "project",
  title: "Projects",
  type: "document",

  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tech",
      title: "Tech",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "summary",
      title: "Summary",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "linkToBuild",
      title: "Link To Build",
      type: "url",
    },
    {
      name: "linkToCode",
      title: "Link To Code",
      type: "url",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    },
  ],
};

export default project;
