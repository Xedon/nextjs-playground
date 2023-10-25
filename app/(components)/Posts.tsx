"use server";

import { FunctionComponent } from "react";
import { readPosts } from "../(supabase)/client";
import { Post } from "./Post";

// @ts-expect-error
export const Posts: FunctionComponent<{ page: string }> = async ({ page }) => {
  const posts = await readPosts(page);
  return (
    <div className=" flex flex-col items-center gap-1">
      <h2 className="text-2xl">Comments</h2>
      <div className="p-8">
        {posts.data?.map((post) => (
          <Post key={post.id} content={post.content} />
        ))}
      </div>
    </div>
  );
};
