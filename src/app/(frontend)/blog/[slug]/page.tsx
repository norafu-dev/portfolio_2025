import getPayloadClient from "@/lib/payload";
import Image from "next/image";
import { title } from "process";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;

  const payload = await getPayloadClient();

  const post = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: slug.trim(),
      },
    },
  });

  const { title } = post.docs[0];

  return (
    <article>
      <h1>{title}</h1>
      <pre>{JSON.stringify(post.docs[0], null, 2)}</pre>
    </article>
  );
};

export default BlogPostPage;
