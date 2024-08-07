import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chaitanya Chaurasia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen overflow-x-hidden flex flex-col
           bodymain ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FollowerPointerCard>
            <div
              id="navbar"
              className="w-full flex items-center justify-center p-4 sticky top-0 z-50 dark:bg-[#09090b] bg-white shadow-white shadow-xl dark:shadow-[#09090b]"
            >
              <Navbar />
            </div>
            <main className="flex-grow">{children}</main>
          </FollowerPointerCard>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
