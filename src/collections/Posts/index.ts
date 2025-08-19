import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "heroImage",
      "status",
      "publishedAt",
      "categories",
    ],
    // groupBy: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "status",
      type: "select",
      options: ["draft", "published", "archived"],
      defaultValue: "draft",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "yyyy/MM/dd",
        },
      },
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
