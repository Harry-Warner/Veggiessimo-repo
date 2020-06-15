export default {
  title: "About Me",
  name: "about",
  type: "document",
  __experimental_actions: ["update", "publish"], //prevent delete and create
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [{ title: "Alternative Text", name: "altText", type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "secondImage",
      title: "Second image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [{ title: "Alternative Text", name: "altText", type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Short Description",
      name: "shortDescription",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
};
