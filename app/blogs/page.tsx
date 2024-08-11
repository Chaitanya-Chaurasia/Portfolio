import { BlogContainer, BlogsHeading } from "@/components/Blogs";
import React from "react";

const BlogsPage = () => {
  return (
    <main className="min-h-screen p-2">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-screen p-4 items-center gap-10 justify-center lg:items-top">
          <BlogsHeading />
          <BlogContainer />
        </div>
      </div>
    </main>
  );
};

export default BlogsPage;
