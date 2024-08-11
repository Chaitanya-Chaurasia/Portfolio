import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Separator } from "./ui/separator";

export const BlogsHeading = () => {
  return (
    <>
      <h2 className="tracking-tighter text-5xl font-extrabold text-center drop-shadow-[0_0px_79px_rgba(56,114,270,1)] ">
        Blogs
      </h2>
      <h1 className="text-lg font-bold">
        Penning my imagination into words....
      </h1>
    </>
  );
};

export const BlogContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 items-center justify-center w-[600px]">
      <BlogNavbar />
      <Separator orientation="vertical" className="h-[80px]" />
      <BlogPost />
    </div>
  );
};

export const BlogNavbar = () => {
  return (
    <NavigationMenu className="w-[350px]">
      <NavigationMenuList className="flex-col items-start">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog 1</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog 2</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const BlogPost = () => {
  return (
    <div className="p-8 bg-transparent space-y-2">
      <h1 className="text-2xl font-bold">Title of the Blog Post</h1>
      <h1 className="text-xs">27th December, 2023</h1>
      <p className="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac justo
        ac justo commodo eleifend. Nulla facilisi. Sed vel diam at velit
        consectetur, sed laoreet felis bibendum.
      </p>
    </div>
  );
};
