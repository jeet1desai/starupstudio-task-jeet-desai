import React from "react";

import { Skeleton } from "../ui/skeleton";

const ProductLoading = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Skeleton className="w-[168px] md:w-full h-[224px] md:h-[400px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[180px]" />
    </div>
  );
};

export default ProductLoading;
