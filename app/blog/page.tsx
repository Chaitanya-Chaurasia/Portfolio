import {
  BlogTitle,
  Instagram,
  LinkedIn,
  MediumPosts,
  Photography,
  XPosts,
} from "@/components/BlogComponents";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col mt-20 justify-center items-center gap-6">
      <BlogTitle />
      <Photography />
      <LinkedIn />
      <Instagram />
      <XPosts />
      <MediumPosts />
    </main>
  );
};

export default page;
