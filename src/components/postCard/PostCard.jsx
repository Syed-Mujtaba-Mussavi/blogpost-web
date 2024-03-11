import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        <div className="w-[90%] h-[400px] relative">
          <Image
            src="https://images.pexels.com/photos/4417069/pexels-photo-4417069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-xs rotate-[270deg] m-auto">01.01.2024</span>
      </div>
      <div>
        <h1 className="text-2xl mb-5 font-bold w-[90%]">Title</h1>
        <p className="mb-5 font-light text-gray-500 w-[90%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          iusto consectetur sit explicabo itaque eaque sint dignissimos modi.
          Aperiam qui in omnis itaque vero fugit natus quis deleniti,
          repellendus pariatur?
        </p>
        <Link href="/blog/post" className="underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
