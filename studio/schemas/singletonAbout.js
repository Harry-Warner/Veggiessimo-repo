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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "secondImage",
      title: "Second image",
      type: "image",
      options: {
        hotspot: true,
      },
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
