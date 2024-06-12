import React from "react";
import Image from "next/image";

import OfferIcon from "@/assets/images/offer-icon.png";

const StripOffer = () => {
  return (
    <div className="flex items-center justify-around p-[8px] bg-black w-full">
      <div className="flex items-center gap-2.5">
        <Image priority src={OfferIcon} alt="offer icon 1" className="sm:w-4 sm:h-4 w-[14px] h-[14px]" />
        <p className="text-white text-xs tracking-wider">Lorem ipsum dolor</p>
      </div>
      <div className="flex items-center gap-2.5 hidden md:flex">
        <Image priority src={OfferIcon} alt="offer icon 2" className="w-4 h-4" />
        <p className="text-white text-xs tracking-wider">Lorem ipsum dolor</p>
      </div>
      <div className="flex items-center gap-2.5 hidden md:flex">
        <Image priority src={OfferIcon} alt="offer icon 3" className="w-4 h-4" />
        <p className="text-white text-xs tracking-wider">Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default StripOffer;
