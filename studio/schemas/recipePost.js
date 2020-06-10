export default {
  name: "recipePost",
  title: "Recipe Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
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
      type: "array",
      of: [{ type: "block" }],
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
      name: "cookingTime",
      title: "Cooking Time",
      type: "number",
    },
    {
      name: "servings",
      title: "Servings",
      type: "number",
    },
    {
      name: "mealType",
      title: "MealType",
      type: "array",
      of: [{ type: "reference", to: { type: "mealType" } }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "ingredients",
    },
    {
      name: "keyIngredients",
      title: "Key Ingredients",
      type: "array",
      of: [{ type: "reference", to: { type: "keyIngredients" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
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
