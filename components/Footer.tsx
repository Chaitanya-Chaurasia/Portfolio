"use client";

import React from "react";
import { Card, CardHeader } from "./ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
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
  );
};

export default Footer;
