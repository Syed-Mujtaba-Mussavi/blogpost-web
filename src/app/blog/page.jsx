import PostCard from "@/components/postCard/PostCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="py-5 md:py-10 lg:py-20">
      <div className="flex flex-wrap gap-5">
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <PostCard />
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <PostCard />
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <PostCard />
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
