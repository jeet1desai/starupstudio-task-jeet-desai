import React from "react";

import { Skeleton } from "../ui/skeleton";

const FooterLoading = () => {
  return (
    <footer className="bg-black text-white w-full py-8 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          <div className="flex flex-col gap-4">
            <Skeleton className="w-full h-[80px]" />
            <Skeleton className="w-[80%] h-[20px]" />
            <Skeleton className="w-[70%] h-[10px]" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-full h-[80px]" />
            <Skeleton className="w-[80%] h-[20px]" />
            <Skeleton className="w-[70%] h-[10px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLoading;
