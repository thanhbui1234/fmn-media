"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleFooter() {
  const items = [
    { title: "Home", target: "div1" },
    { title: "Inbox", target: "div2" },
    { title: "Calendar", target: "div3" },
    { title: "Search", target: "div4" },
    { title: "Settings", target: "settings" },
    { title: "FMN MEDIA ALL RIGHT RESERVED", target: "logout" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(items[0]);

  const handleItemClick = (item: { title: string; target: string }) => {
    setSelectedItem(item);
    setIsOpen(false); // Optionally close the collapsible when an item is selected

    const targetElement = document.getElementById(item.target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-10 left-0 right-0 bg-white  border-gray-200 mx-10  rounded-xl shadowFooter border-none xl:hidden">
      <Collapsible
        className="rounded-xl"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex justify-between items-center px-4 py-3  border-none text-gray-900 transition-all h-[40px] rounded-xl shadowFooter bg-colorTop  hover:bg-inherit fontText"
          >
            <span>{selectedItem.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent
          className={`overflow-hidden shadowFooter transition-[max-height] duration-300 ${
            isOpen ? "max-h-screen" : ""
          }`}
        >
          <div className="space-y-2  bg-gray-50 border-t  shadowFooter">
            {items.map((item) => (
              <div
                key={item.target}
                className="py-3 font-mono text-sm cursor-pointer hover:bg-black hover:text-white transition-all border-b border-black fontText"
                onClick={() => handleItemClick(item)}
              >
                <p className="px-3">{item.title}</p>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
