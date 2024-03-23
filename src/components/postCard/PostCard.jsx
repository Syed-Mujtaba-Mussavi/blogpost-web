import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        {post.img && (
          <div className="w-[90%] h-[400px] relative">
            <Image
              src={post.img}
              alt="post"
              fill
              className="object-cover w-[90%] h-[400px]"
            />
          </div>
        )}
        <span className="text-xs rotate-[270deg] m-auto">
          {post.createdAt.toString().slice(0, 10)}
        </span>
      </div>
      <div>
        <h1 className="text-2xl mb-5 font-bold w-[90%]">{post.title}</h1>
        <p className="mb-5 font-light text-gray-500 w-[90%]">{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className="underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
