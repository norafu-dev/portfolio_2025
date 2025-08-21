import getPayloadClient from "@/lib/payload";
import { Media } from "../../../../../payload-types";
import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const payload = await getPayloadClient();

  const post = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug.trim() },
    },
  });

  if (post.docs.length === 0) {
    return notFound();
  }

  const { title, heroImage } = post.docs[0];
  const media = heroImage as Media;

  return (
    <article>
      <h1>{title}</h1>

      {media && media.url && (
        <div className="relative w-full h-96 mb-8">
          <Image src={media.url} alt={media.filename || title} fill />
        </div>
      )}

      {/* 其他内容 */}
      <pre>{JSON.stringify(post.docs[0], null, 2)}</pre>
    </article>
  );
};

export default BlogPostPage;
