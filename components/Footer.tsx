"use client";

import React from "react";
import { Card, CardHeader } from "./ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Div } from "./ui/moving-border";
const Footer = () => {
  return (
    <Div
      borderRadius="1.75rem"
      className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <Card className="bg-transparent text-center">
        <CardHeader>
          <h2 className="tracking-tight text-sm text-muted-foreground flex gap-2 items-center justify-center">
            &copy;Chaitanya Chaurasia, 2024.{" "}
            <a
              href="https://github.com/Chaitanya-Chaurasia/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon
                height={15}
                width={15}
                className="hover:scale-125"
              />
            </a>
          </h2>
          <h2 className="tracking-tight text-sm">
            Created using Nextjs, shadcn and a pinch of creativity.
          </h2>
        </CardHeader>
      </Card>
    </Div>
  );
};

export default Footer;
