import React from "react";

import { Skeleton } from "../ui/skeleton";

const HeaderLoading = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-4 sm:px-16 py-6 sm:py-8 border-b sm:border-0">
        <div className="flex items-center gap-1">
          <Skeleton className="sm:w-9 sm:h-9 w-[20px] h-[20px]" />
        </div>
        <Skeleton className="w-[50px] h-[30px]" />
        <div className="flex items-center gap-3 sm:gap-6">
          <Skeleton className="w-[14px] h-[14px]" />
          <Skeleton className="w-[14px] h-[14px]" />
          <Skeleton className="w-[14px] h-[14px]" />
          <Skeleton className="w-[14px] h-[14px]" />
          <Skeleton className="w-[14px] h-[14px]" />
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center sm:gap-10 md:gap-16 px-16 py-4 sm:border-b">
        <Skeleton className="w-[50px] h-[15px]" />
        <Skeleton className="w-[50px] h-[15px]" />
        <Skeleton className="w-[50px] h-[15px]" />
        <Skeleton className="w-[50px] h-[15px]" />
        <Skeleton className="w-[50px] h-[15px]" />
      </div>
    </div>
  );
};

export default HeaderLoading;
