import getPayloadClient from "@/lib/payload";
import Link from "next/link";

const BlogPage = async () => {
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "posts",
    where: {
      status: {
        equals: "published",
      },
    },
    limit: 10,
  });

  return (
    <section>
      <ul>
        {posts.docs.map((post) => (
          <li
            key={post.id}
            className="hover:cursor-pointer hover:text-blue-500"
          >
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogPage;
