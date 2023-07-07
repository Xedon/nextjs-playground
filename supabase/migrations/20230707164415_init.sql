create table "public"."posts" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "content" text not null,
    "page" text not null
);
CREATE UNIQUE INDEX posts_pkey ON public.posts USING btree (id);
alter table "public"."posts"
add constraint "posts_pkey" PRIMARY KEY using index "posts_pkey";