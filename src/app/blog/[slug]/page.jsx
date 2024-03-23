import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import Image from "next/image";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

export const generateMetadata = async ({ params: { slug } }) => {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params: { slug } }) => {
  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);
  return (
    <div className="flex gap-[50px] py-5 md:py-10 lg:py-20">
      {post.img && (
        <div className="hidden lg:block w-[600px] relative h-[calc(100vh-200px)]">
          <Image src={post.img} alt="img" fill className="object-cover" />
        </div>
      )}
      <div className="flex-2 flex flex-col gap-[50px]">
        <h1 className="text-4xl">{post.title}</h1>
        <div className="flex gap-5">
          {post && <PostUser userId={post.userId} />}
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-700 font-bold">Published</span>
            <span className="font-medium">
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className="text-xl">{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
