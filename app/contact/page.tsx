"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { SonicLoader } from "@/components/CustomComponents";
import { isEmailValid } from "@/lib/helper";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const sendEmail = async (
    senderEmail: string,
    senderMessage: string,
    e: any
  ) => {
    e.preventDefault();
    setLoading(true);

    if (!isEmailValid(senderEmail)) {
      toast.error("Invalid email address");
    } else {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

      const templateParams = {
        from_name: senderEmail,
        to_name: "chaitanyalvis@gmail.com",
        message: senderMessage,
      };

      const emailSent = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (emailSent.status === 200) {
        toast.success(`Email sent successfully from ${senderEmail}`);
      } else {
        toast.error("Failed to send email");
      }
    }

    setLoading(false);
    setSenderEmail("");
    setSenderMessage("");

    return;
  };

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
            value={senderEmail}
            type="email"
            placeholder="Email"
            required
            className="dark:font-bold"
            onChange={(e) => {
              setSenderEmail(e.target.value);
            }}
          />
          <Textarea
            value={senderMessage}
            placeholder="Type your message here."
            spellCheck
            required
            className="dark:font-bold"
            onChange={(e) => {
              setSenderMessage(e.target.value);
            }}
          />{" "}
          {loading ? (
            <SonicLoader />
          ) : (
            <div className="flex gap-2">
              <Button
                className="text-xs font-semibold"
                onClick={(e) => sendEmail(senderEmail, senderMessage, e)}
              >
                Send Message
              </Button>
              <Button className="text-xs font-semibold" disabled>
                Subscribe to my newsletter (soon)
              </Button>
            </div>
          )}
        </div>
        <Separator className="w-96" />
        <div className="flex items-center justify-center gap-10">
          <a
            href="https://github.com/Chaitanya-Chaurasia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon
              height={20}
              width={20}
              className="hover:scale-125"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/chai-t/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogoIcon
              height={20}
              width={20}
              className="hover:scale-125"
            />
          </a>

          <a
            href="https://www.instagram.com/chaitanya_chaurasia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon
              height={20}
              width={20}
              className="hover:scale-125"
            />
          </a>
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
