import React from "react";

import FilterLoading from "../Filter/loading";
import ProductLoading from "../Product/loading";

const ProductsLoading = () => {
  return (
    <div className="flex gap-4 py-4 px-4 md:px-0">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <FilterLoading />
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4">
        <div className="grid gap-4 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((index) => {
            return <ProductLoading key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsLoading;
