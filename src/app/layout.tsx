import type { Metadata } from "next";
import { Reem_Kufi } from "next/font/google";

import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Banner from "@/modules/VideoBanner/banner";
import dynamic from "next/dynamic";

const CollapsibleFooter = dynamic(() =>
  import("@/components/ui/CollSpance").then((mod) => mod.CollapsibleFooter)
);

const HeaderMolbie = dynamic(() =>
  import("@/components/ui/header").then((mod) => mod.HeaderMolbie)
);

const reemKufi = Reem_Kufi({
  subsets: ["latin"],
  weight: ["400", "700"], // Include the weights you want
  variable: "--font-reem-kufi", // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${reemKufi.variable} font-sans flex flex-col `}>
        <HeaderMolbie />
        <div className="bg-gray-100 w-screen h-screen ">
          <Banner />
        </div>
        <div className="relative w-screen h-screen">
          <SidebarProvider>
            {/* <div
            id="b"
            className="scroll-snap-y scroll-snap-mandatory overflow-y-auto w-full"
          > */}
            <AppSidebar />
            {children}
            {/* </div> */}
          </SidebarProvider>
        </div>
        <CollapsibleFooter />
      </body>
    </html>
  );
}
