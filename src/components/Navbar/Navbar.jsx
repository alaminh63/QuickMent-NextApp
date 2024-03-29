"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import loggedUserPhoto from "../../../public/loggedUser.png";
import { Input } from "../ui/input";
import Image from "next/image";
import React from "react";
import CalenderPickerNavbar from "./CalenderPickerNavbar";
import dynamic from "next/dynamic";
const Navbar = () => {
  return (
    <div className="border-b md:flex items-center justify-between px-12 py-2">
      <div className="flex items-center">
        <div>
          <Input type="text" placeholder="Search" className="px-8 py-2" />
        </div>
        <Menubar className="md:hidden flex justify-between md:gap-14 px-3 border py-7 items-center">
          <div className="flex gap-1 items-center">
            <div className="w-12">
              <Image src={loggedUserPhoto} alt="profile photo of logged user" />
            </div>
            <div className="md:block flex flex-col">
              <p className="md:text-xs text-[10px]">Welcome back,</p>
              <h2 className="md:text-lg text-[12px] font-bold">
                Akshita Patel
              </h2>
            </div>
          </div>
          <MenubarMenu>
            <MenubarTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
                  fill="#1E2875"
                />
              </svg>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Logout <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex items-center gap-2">
        <CalenderPickerNavbar />
        <Menubar className="md:flex hidden justify-between md:gap-14 px-3 border py-7 items-center">
          <div className="flex gap-1 items-center">
            <div className="w-12">
              <Image src={loggedUserPhoto} alt="profile photo of logged user" />
            </div>
            <div className="md:block flex flex-col">
              <p className="md:text-xs text-[10px]">Welcome back,</p>
              <h2 className="md:text-lg text-[12px] font-bold">
                Akshita Patel
              </h2>
            </div>
          </div>
          <MenubarMenu>
            <MenubarTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
                  fill="#1E2875"
                />
              </svg>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Logout <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
