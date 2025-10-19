"use client";

import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./navbar";
import { cn } from "@/shared/lib";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const handleOpen = () => {
    openMenu();
    document.body.classList.add("lock-body");
  };
  const handleClose = () => {
    closeMenu();
    document.body.classList.remove("lock-body");
  };

  return (
    <div className="xl:hidden">
      <Image
        src="/icons/menu.svg"
        alt="Expand menu with links"
        width={32}
        height={32}
        onClick={handleOpen}
      />
      <aside
        className={cn(
          "fixed inset-0 z-20 flex translate-x-full flex-col gap-8 px-4 py-8 backdrop-blur-3xl transition-transform",
          {
            ["translate-0"]: isOpen,
          },
        )}
      >
        <Image
          className="self-end"
          src="/icons/close.svg"
          alt="Close menu"
          width={32}
          height={32}
          onClick={handleClose}
        />
        <Navbar className="flex-col text-[22px]" onLinkClick={handleClose} />
      </aside>
    </div>
  );
}
