import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

const page = () => {
  return (
    <main className="p-10 bg-gradient-to-b from-white to-pink-100 min-h-screen dark:from-black">
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="tracking-tight text-5xl font-extrabold text-center w-[550px]">
          The key to{" "}
          <span className="underline text-indigo-400">building a tomorrow</span>{" "}
          together, is to{" "}
          <span className="text-white drop-shadow-[0_0px_1.2px_rgba(0,0,0,0.8)]">
            connect
          </span>{" "}
          today!
        </h2>
        <span className="w-96 text-center">
          Whether you're looking to collaborate, just say hi, or looking forward
          to having a chat, I'm all down for it. Go ahead, drop me a message and
          I'll get back to you within 24 hours.
        </span>
        <Separator className="w-96" />
        <div className="w-[350px] flex flex-col items-center justify-center gap-2">
          <Input
            type="email"
            placeholder="Email"
            required
            className="dark:font-bold"
          />
          <Textarea
            placeholder="Type your message here."
            spellCheck
            required
            className="dark:font-bold"
          />
          <div className="flex gap-2">
            <Button className="text-xs font-semibold">Send Message</Button>
            <Button className="text-xs font-semibold" disabled>
              Subscribe to my newsletter (soon)
            </Button>
          </div>
        </div>
        <Separator className="w-96" />
        <div className="flex items-center justify-center gap-10">
          <GitHubLogoIcon height={20} width={20} className="hover:scale-125" />
          <LinkedInLogoIcon
            height={20}
            width={20}
            className="hover:scale-125"
          />
          <TwitterLogoIcon height={20} width={20} className="hover:scale-125" />
          <InstagramLogoIcon
            height={20}
            width={20}
            className="hover:scale-125"
          />

          <Separator orientation="vertical" className="h-[20px]" />
          <span className="font-medium text-muted-foreground text-sm">
            cchauras@asu.edu
          </span>
        </div>
      </div>
    </main>
  );
};

export default page;
