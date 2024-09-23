import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import AppContextProvider from "@/components/utilis/hooks/AppHook";
import Cursor from "@/components/UI/cursor/Cursor";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("font-sans antialiased", fontSans.variable)}>
        <AppContextProvider>
          {/* <Providers> */}
          <Cursor />
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* <Navbar /> */}
            {children}
          </div>
          {/* </Providers> */}
        </AppContextProvider>
      </body>
    </html>
  );
}
