import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "Blog Description",
};
// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();
  return (
    <div className="py-5 md:py-10 lg:py-20">
      <div className="flex flex-wrap gap-5">
        {posts.map((post) => (
          <div className="w-full md:w-[45%] lg:w-[30%]" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
