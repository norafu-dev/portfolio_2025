import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    defaultColumns: ["filename", "alt", "createdAt"],
    useAsTitle: "filename",
  },
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ["image/*"],
  },
  fields: [
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
