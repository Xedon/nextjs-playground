import { NewPostForm } from "@/app/(components)/NewPostForm";
import { Pokemon } from "@/app/(components)/Pokemon";
import { Posts } from "@/app/(components)/Posts";
import { Suspense } from "react";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Pokemon id={id} />
      </Suspense>
      <div className="pt-8">
        <Posts page={id} />
      </div>
      <div className="pt-16">
        <NewPostForm page={id} />
      </div>
    </>
  );
}
