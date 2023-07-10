import { FunctionComponent, useId } from "react";
import { createPost } from "../(supabase)/client";
import { revalidateTag } from "next/cache";

export const NewPostForm: FunctionComponent<{ page: string }> = ({ page }) => {
  async function newPost(data: FormData) {
    "use server";
    await createPost(page, data.get("content")?.toString()!);
    revalidateTag("posts");
  }

  return (
    <>
      <form
        className="grid justify-items-center grid-flow-row"
        action={newPost}
      >
        <label htmlFor="content" className="text-xl">
          Comment this Pokemon
        </label>
        <textarea id="content" name="content" className="ml-1 text-black" />
        <input type="submit" />
      </form>
    </>
  );
};
