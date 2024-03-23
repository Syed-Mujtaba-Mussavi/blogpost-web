import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { slug } }) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Post");
  }
};

export const DELETE = async (request, { params: { slug } }) => {
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("POST DELETED");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Post");
  }
};
