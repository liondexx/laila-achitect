"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function MenuDrop() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex items-center outline-none hover:bg-violet3"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon className="h-16 w-10 sm:w-16" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white shadow-xl pb-3 w-screen flex flex-col items-center rounded-md will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="pl-1 sm:p-0 sm:w-36 w-24 text-left leading-none text font-semibold h-8 text-xl sm:text-3xl items-center relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
            Projetos
          </DropdownMenu.Item>
          <DropdownMenu.Item className="pl-1 sm:p-0 sm:w-36 w-24 text-left leading-none text font-semibold  h-8 text-xl sm:text-3xl items-center relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
            Instagram
          </DropdownMenu.Item>
          <DropdownMenu.Item className="pl-1 sm:p-0 sm:w-36 w-24 text-left leading-none text font-semibold h-8 text-xl sm:text-3xl items-center relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
            Contato
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
