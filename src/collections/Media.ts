import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    defaultColumns: ["filename", "alt", "createdAt"],
    useAsTitle: "alt",
  },
  upload: {
    staticDir: "public/media",
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
    {
      name: "createdAt",
      type: "date",
      defaultValue: new Date(),
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "yyyy/MM/dd",
        },
      },
    },
  ],
};
