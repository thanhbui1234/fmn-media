"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

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
  { title: "Calendar", target: "calendar" },
  { title: "Search", target: "search" },
  { title: "Settings", target: "settings" },
  { title: "FMN MEDIA ALL RIGHT RESERVED", target: "logout" },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleScroll = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveItem(target);
    }
  };

  return (
    <Sidebar className="w-[20%]">
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
                <SidebarMenuItem className="" key={item.title}>
                  <SidebarMenuButton
                    className="cursor-pointer p-10"
                    onClick={() => handleScroll(item.target)}
                  >
                    <span
                      className={`text-[20px] text-[#ccc] ${
                        activeItem === item.target ? "text-[#ffcc00]" : ""
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
