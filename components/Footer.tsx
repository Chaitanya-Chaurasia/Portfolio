import React from "react";
import { Card, CardHeader } from "./ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <Card className="bg-transparent text-center">
      <CardHeader>
        <h2 className="tracking-tight text-sm text-muted-foreground flex gap-2 items-center justify-center">
          &copy;Chaitanya Chaurasia, 2024. <GitHubLogoIcon />
        </h2>
        <h2 className="tracking-tight text-sm">
          Created using Nextjs, shadcn and a pinch of creativity.
        </h2>
      </CardHeader>
    </Card>
  );
};

export default Footer;
