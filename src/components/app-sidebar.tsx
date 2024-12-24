"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

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

  const handleSetActive = (target: string) => {
    setActiveItem(target);
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
                  <SidebarMenuButton className="cursor-pointer p-10 " asChild>
                    <ScrollLink
                      to={item.target}
                      smooth={true} // Enables smooth scrolling
                      duration={100} // Duration of scroll in ms
                      spy={true} // Watches for the active section
                      offset={-50} // Adjust to account for fixed headers
                      activeClass="active-link" // Class for the active link
                      className={`flex  space-x-2 p-2  hover:bg-[#080404] active:bg-[#080404] group  ${
                        activeItem === item.target ? "" : ""
                      }`}
                      onSetActive={() => handleSetActive(item.target)} // Set active item on scroll
                      onClick={() => handleSetActive(item.target)} // Set active item on click
                    >
                      <span
                        className={`text-[20px]  text-[#ccc]   ${
                          activeItem === item.target ? "text-[#ffcc00]" : ""
                        } `}
                      >
                        {item.title}
                      </span>
                    </ScrollLink>
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
