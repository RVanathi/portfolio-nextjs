const pageInfo = {
  name: "pageInfo",
  title: "Page Info",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    { name: "role", title: "Role", type: "string" },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "backgroundInformation",
      title: "Background Info",
      // type: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "profilePic",
      title: "Profile Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
};
export default pageInfo;
