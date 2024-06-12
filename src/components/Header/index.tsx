"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "../ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Separator } from "../ui/separator";

import LogoIcon from "@/assets/images/logo.png";

import SearchIcon from "@/assets/images/search-icon.png";
import WishListIcon from "@/assets/images/wishlist-icon.png";
import CartIcon from "@/assets/images/bag-icon.png";
import ProfileIcon from "@/assets/images/profile-icon.png";

const Header = () => {
  const [language, setLanguage] = useState<string>("eng");

  return (
    <header className="w-full sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between px-4 sm:px-16 py-6 sm:py-8 border-b sm:border-0">
        <div className="flex items-center gap-1">
          <Menu className="sm:hidden block" />
          <Link href="/">
            <Image priority src={LogoIcon} className="sm:w-9 sm:h-9 w-[20px] h-[20px]" alt="logo" />
          </Link>
        </div>
        <h1 className="font-extrabold text-xl sm:text-4xl tracking-wider uppercase">LOGO</h1>
        <div className="flex items-center gap-3 sm:gap-6">
          <Image priority src={SearchIcon} className="sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer" alt="search" />
          <Image priority src={WishListIcon} className="sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer" alt="wishlist" />
          <Image priority src={CartIcon} className="sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer" alt="cart" />
          <Image priority src={ProfileIcon} className="hidden sm:block sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer" alt="profile" />
          <Select value={language} onValueChange={(newLangValue: string) => setLanguage(newLangValue)}>
            <SelectTrigger className="hidden sm:flex min-w-[46px]">
              <SelectValue placeholder="Eng" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="eng">Eng</SelectItem>
              <SelectItem value="fr">Fr</SelectItem>
              <SelectItem value="zh">Zh</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center sm:gap-10 md:gap-16 px-16 py-4 sm:border-b">
        <h4 className="uppercase font-bold sm:text-lg md:text-xl tracking-wider cursor-pointer">Shop</h4>
        <h4 className="uppercase font-bold sm:text-lg md:text-xl tracking-wider cursor-pointer">Skills</h4>
        <h4 className="uppercase font-bold sm:text-lg md:text-xl tracking-wider cursor-pointer">Stories</h4>
        <h4 className="uppercase font-bold sm:text-lg md:text-xl tracking-wider cursor-pointer">About</h4>
        <h4 className="uppercase font-bold sm:text-lg md:text-xl tracking-wider cursor-pointer">Contact Us</h4>
      </div>
      <div className="sm:hidden block px-4 py-4">
        <Breadcrumb className="uppercase">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-xs text-[#BFC8CD]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <Separator orientation="vertical" className="h-[14px] w-[1px] bg-[#BFC8CD]" />
            <BreadcrumbItem className="text-xs text-black">Shop</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default Header;
