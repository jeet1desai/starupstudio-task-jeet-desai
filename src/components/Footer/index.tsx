import React from "react";
import Image from "next/image";
import Link from "next/link";

import USAFlagIcon from "@/assets/images/usa-flag-icon.png";
import StarIcon from "@/assets/images/star-icon.png";
import InstagramIcon from "@/assets/images/instagram-icon.png";
import LinkedinIcon from "@/assets/images/linkedin-icon.png";
import CardsIcon from "@/assets/images/cart-icons.png";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full pt-8 md:pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          <div className="newsletter-section">
            <h3 className="uppercase mb-2 md:mb-6 text-base md:text-xl	font-bold">Be the first to know</h3>
            <p className="text-sm">Sign up for updates from mettā muse.</p>
            <form>
              <div className="mt-4 md:mt-16 flex items-center gap-4">
                <Input className="rounded-none text-black py-5 px-6 text-lg" type="email" placeholder="Enter your e-mail..." />
                <Button className="uppercase font-medium w-[184px] py-5 px-6 border border-white rounded text-lg disabled:bg-black" disabled>
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <Separator className="block md:hidden" />
          <div className="contact-section">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8 md:gap-2">
              <div className="call-us">
                <h3 className="uppercase text-base md:text-xl font-bold mb-4">Contact Us</h3>
                <ul className="flex items-center md:items-start flex-row md:flex-col gap-2 md:gap-0 text-sm md:text-base">
                  <li className="mb-1">+44 221 133 5360</li>
                  <li className="block md:hidden">
                    <Image priority src={StarIcon} className="w-[6px] h-[6px]" alt="star" />
                  </li>
                  <li>customercare@mettamuse.com</li>
                </ul>
              </div>
              <Separator className="block sm:hidden" />
              <div className="mt-0 md:mt-5">
                <h3 className="uppercase text-base md:text-xl font-bold mb-4">Currency</h3>
                <ul className="flex items-center gap-3">
                  <li>
                    <Image priority src={USAFlagIcon} className="w-[24px] h-[24px] cursor-pointer" alt="flag" />
                  </li>
                  <li>
                    <Image priority src={StarIcon} className="w-[6px] h-[6px]" alt="star" />
                  </li>
                  <li>USD</li>
                </ul>
              </div>
            </div>
            <p className="hidden md:block mt-5">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
        <Separator className="mt-8 md:my-8" />
        <div className="hidden md:block web-footer-menu">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="about-link-follow">
              <div className="grid grid-cols-2 gap-10">
                <div className="about-us-section">
                  <Link href="/">
                    <h3 className="font-bold text-2xl mb-4">mettā muse</h3>
                  </Link>
                  <ul className="flex gap-4 flex-col text-lg font-normal">
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                  </ul>
                </div>
                <div className="link-section">
                  <h3 className="uppercase font-bold text-2xl mb-4">Quick Links</h3>
                  <ul className="flex gap-4 flex-col text-lg font-normal">
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="follow-section">
              <div className="follow-us">
                <h3 className="uppercase text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <Image priority src={InstagramIcon} className="w-[32px] h-[32px] cursor-pointer" alt="instagram" />
                  <Image priority src={LinkedinIcon} className="w-[32px] h-[32px] cursor-pointer" alt="linkedin" />
                </div>
              </div>
              <Separator className="hidden" />
              <div className="mt-9">
                <h3 className="text-xl font-bold mb-4">mettā muse ACCEPTS</h3>
                <Image priority src={CardsIcon} className="w-[375px] h-[35px]" alt="cards" />
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden mobile-footer-menu">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h4 className="font-bold text-base">mettā muse</h4>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex gap-4 flex-col text-base mb-2">
                  <li>About Us</li>
                  <li>Stories</li>
                  <li>Artisans</li>
                  <li>Boutiques</li>
                  <li>Contact Us</li>
                  <li>EU Compliances Docs</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h4 className="uppercase text-base font-bold">Quick Links</h4>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex gap-4 flex-col text-base mb-2">
                  <li>Orders & Shipping</li>
                  <li>Join/Login as a Seller</li>
                  <li>Payment & Pricing</li>
                  <li>Return & Refunds</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h4 className="uppercase text-base font-bold">Follow Us</h4>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-4 mb-2">
                  <Image priority src={InstagramIcon} className="w-[32px] h-[32px] cursor-pointer" alt="instagram" />
                  <Image priority src={LinkedinIcon} className="w-[32px] h-[32px] cursor-pointer" alt="linkedin" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-6">
            <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">mettā muse ACCEPTS</h3>
            <Image priority src={CardsIcon} className="w-[375px] h-[35px]" alt="cards" />
          </div>
        </div>
        <p className="text-sm	font-normal text-center my-8">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
