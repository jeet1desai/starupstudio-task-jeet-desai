import React from "react";
import { Skeleton } from "../ui/skeleton";

const FilterLoading = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Skeleton className="w-full h-[80px]" />
      <Skeleton className="w-full h-[1px]" />
      <Skeleton className="w-full h-[80px]" />
      <Skeleton className="w-full h-[1px]" />
      <Skeleton className="w-full h-[80px]" />
      <Skeleton className="w-full h-[1px]" />
      <Skeleton className="w-full h-[80px]" />
      <Skeleton className="w-full h-[1px]" />
      <Skeleton className="w-full h-[80px]" />
      <Skeleton className="w-full h-[1px]" />
      <Skeleton className="w-full h-[80px]" />
      <Skeleton className="w-full h-[1px]" />
    </div>
  );
};

export default FilterLoading;
