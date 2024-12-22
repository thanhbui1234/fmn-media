"use client";

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
  { title: "Home", target: "home" },
  { title: "Inbox", target: "inbox" },
  { title: "Calendar", target: "calendar" },
  { title: "Search", target: "search" },
  { title: "Settings", target: "settings" },
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
          <SidebarGroupLabel>FMN</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem  key={item.title}>
                  <SidebarMenuButton className="cursor-pointer" asChild>
                    <ScrollLink
                      to={item.target}
                      smooth={true} // Enables smooth scrolling
                      duration={100} // Duration of scroll in ms
                      spy={true} // Watches for the active section
                      offset={-50} // Adjust to account for fixed headers
                      activeClass="active-link" // Class for the active link
                      className={`flex justify-center items-center space-x-2 p-2 rounded-md hover:bg-gray-200 ${
                        activeItem === item.target ? "bg-gray-300" : ""
                      }`}
                      onSetActive={() => handleSetActive(item.target)} // Set active item on scroll
                      onClick={() => handleSetActive(item.target)} // Set active item on click
                    >
                      <span>{item.title}</span>
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
