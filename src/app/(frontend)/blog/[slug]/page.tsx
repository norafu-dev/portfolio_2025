import getPayloadClient from "@/lib/payload";
import { Media } from "../../../../../payload-types";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getMediaUrl, isRemoteUrl } from "@/lib/media-utils";

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

      {/* 渲染heroImage */}
      {media && media.url && (
        <div className="relative w-full h-96 mb-8">
          <Image
            src={getMediaUrl(media)}
            alt={media.alt || title}
            width={media.width || 800}
            height={media.height || 600}
            className="object-cover rounded-lg w-full h-full"
            priority
            // 只有远程URL需要unoptimized
            unoptimized={isRemoteUrl(getMediaUrl(media))}
          />
        </div>
      )}

      {/* 其他内容 */}
      <pre>{JSON.stringify(post.docs[0], null, 2)}</pre>
    </article>
  );
};

export default BlogPostPage;
