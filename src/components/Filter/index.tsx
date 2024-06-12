import React from "react";

import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const Filter = () => {
  return (
    <div>
      <div className="py-6">
        <div className="flex items-start space-x-2">
          <Checkbox id="customizable" />
          <label htmlFor="customizable" className="uppercase font-bold text-lg">
            Customizable
          </label>
        </div>
      </div>
      <Separator />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="text-[#252020] text-lg flex flex-col items-start">
              <h4 className="uppercase font-bold">Ideal For</h4>
              <p>All</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-base flex flex-col gap-4">
              <p className="underline text-[#BFC8CD] cursor-pointer">Unselect all</p>
              <div className="flex items-center space-x-2">
                <Checkbox id="men" className="h-[18px] w-[18px]" />
                <label htmlFor="men">Men</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="women" className="h-[18px] w-[18px]" />
                <label htmlFor="women">Women</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="kids" className="h-[18px] w-[18px]" />
                <label htmlFor="kids">Baby & Kids</label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="text-[#252020] text-lg flex flex-col items-start">
              <h4 className="uppercase font-bold">Occasion</h4>
              <p className="">All</p>
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="text-[#252020] text-lg flex flex-col items-start">
              <h4 className="uppercase font-bold">Work</h4>
              <p className="">All</p>
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="text-[#252020] text-lg flex flex-col items-start">
              <h4 className="uppercase font-bold">Fabric</h4>
              <p className="">All</p>
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="text-[#252020] text-lg flex flex-col items-start">
              <h4 className="uppercase font-bold">Segment</h4>
              <p className="">All</p>
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            <div className="text-[#252020] text-lg flex flex-col items-start">
              <h4 className="uppercase font-bold">Suitable For</h4>
              <p className="">All</p>
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            <div className="text-[#252020] text-lg flex flex-col items-start">
              <h4 className="uppercase font-bold">Raw Materials</h4>
              <p className="">All</p>
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            <div className="text-[#252020] text-lg flex flex-col items-start">
              <h4 className="uppercase font-bold">Pattern</h4>
              <p className="">All</p>
            </div>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
