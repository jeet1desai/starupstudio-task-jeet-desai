import React from "react";
import { Skeleton } from "../ui/skeleton";

const StripOfferLoading = () => {
  return (
    <div className="flex items-center justify-around p-[8px] bg-black w-full">
      <div className="flex items-center gap-2.5">
        <Skeleton className="sm:w-4 sm:h-4 w-[14px] h-[14px]" />
        <Skeleton className="w-[28px] h-[28px]" />
      </div>
      <div className="flex items-center gap-2.5 hidden md:flex">
        <Skeleton className="sm:w-4 sm:h-4 w-[14px] h-[14px]" />
        <Skeleton className="w-[28px] h-[28px]" />
      </div>
      <div className="flex items-center gap-2.5 hidden md:flex">
        <Skeleton className="sm:w-4 sm:h-4 w-[14px] h-[14px]" />
        <Skeleton className="w-[28px] h-[28px]" />
      </div>
    </div>
  );
};

export default StripOfferLoading;
