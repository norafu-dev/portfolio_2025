import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { Categories } from "./collections/Categories";
import { Posts } from "./collections/Posts";
import { Media } from "./collections/Media";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Categories, Posts, Media],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  // plugins
  plugins: [
    vercelBlobStorage({
      enabled: process.env.NODE_ENV === 'production', // 只在生产环境启用
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
