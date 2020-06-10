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
    },
    {
      name: "secondImage",
      title: "Second image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Short Greeting",
      name: "shortGreeting",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Short Description",
      name: "shortDescription",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
