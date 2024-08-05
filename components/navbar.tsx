"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@radix-ui/react-select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import me from "@/public/myAvatar.svg";
import Image from "next/image";
import { ModeToggle } from "./ui/dark-mode";
import { Pencil2Icon } from "@radix-ui/react-icons";
import sf from "@/public/sf.jpeg";
export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/work" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Work
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col items-start justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 text-lg font-semibold">
                      Welcome to my Blogs Page <Pencil2Icon />
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Take a minute to read my thoughts on ongoing affairs, new
                      technologies and even my reflections and experiences. I
                      believe that my experiences and learnings could definitely
                      be of help to someone.
                      <br />
                      <br />
                      If you know me and like my work, and want to recommend me,
                      you can do so by adding a thank you note.
                      <br />
                      <br />
                      This page is still in development. Releasing on the 15th
                      of August.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>

              <ListItem title="Photography">
                <p>
                  Live my experiences with me as you browse through my clicks.
                </p>
              </ListItem>
              <ListItem className="items-center">
                <Image src={sf} alt="sf" height={260} />
                <p className="text-xs my-4">Clay Street, San Francisco, 2024</p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Get in touch
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {/* Change CSS props of dropdown here */}
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
