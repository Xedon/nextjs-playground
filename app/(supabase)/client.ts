import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const clientWithTag = (tags?: string[]) =>
  createClient<Database>(process.env.API_URL!, process.env.ANON_KEY!, {
    auth: { persistSession: false },
    global: {
      fetch: (input, init) => fetch(input, { ...init, next: { tags } }),
    },
  });

const postsClient = clientWithTag(["posts"]);

export const createPost = async (page: string, content: string) =>
  postsClient.from("posts").insert({ page, content });

export const readPosts = async () => postsClient.from("posts").select();
