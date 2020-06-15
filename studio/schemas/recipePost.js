export default {
  name: "recipePost",
  title: "Recipe Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (rule) => rule.required().max(200),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
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
      name: "cookingTime",
      title: "Cooking Time",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "servings",
      title: "Servings",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mealType",
      title: "MealType",
      type: "array",
      of: [{ type: "reference", to: { type: "mealType" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "keyIngredients",
      title: "Key Ingredients",
      type: "array",
      of: [{ type: "reference", to: { type: "keyIngredients" } }],
    },
    {
      name: "body",
      title: "Method",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
