"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items with scroll targets.
const items = [
  { title: "Home", target: "div1" },
  { title: "Inbox", target: "div2" },
  { title: "Calendar", target: "div3" },
  { title: "Search", target: "div4" },
  { title: "Settings", target: "settings" },
  { title: "FMN MEDIA ALL RIGHT RESERVED", target: "logout" },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState<string>("");

  // Scroll to the target section and update active state
  const handleScroll = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveItem(target);
    }
  };

  // Optional: Automatically update activeItem based on scroll position
  useEffect(() => {
    const handleScrollPosition = () => {
      items.forEach((item) => {
        const element = document.getElementById(item.target);
        if (element) {
          const rect = element.getBoundingClientRect();
          console.log(rect);
          
          // Check if the element is in the viewport
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveItem(item.target);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex flex-col gap-3">
            <p className="text-2xl font-bold text-black">Hello kitty</p>
            <div className="text-black flex gap-3">
              <FaFacebook size={19} />
              <FaTwitter size={19} />
              <FaInstagram size={19} />
              <FaLinkedin size={19} />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`cursor-pointer p-10 hover:bg-black hover:text-[#ffcc00] active:bg-black active:text-[#ffcc00] ${
                      activeItem === item.target
                        ? "bg-black text-[#ffcc00]"
                        : ""
                    }`}
                    onClick={() => handleScroll(item.target)}
                  >
                    <span
                      className={`text-[20px] ${
                        activeItem === item.target
                          ? "text-[#ffcc00]"
                          : "text-[#ccc]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
