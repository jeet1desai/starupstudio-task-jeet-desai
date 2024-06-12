import React from "react";
import Image from "next/image";

import WishListIcon from "@/assets/images/wishlist-icon.png";

interface ProductProps {
  title: string;
  image: string;
  isNewProduct: boolean;
  isProductOutOfStack: boolean;
}

const Product = ({ title, image, isNewProduct, isProductOutOfStack }: ProductProps) => {
  return (
    <div className="product-card">
      <div className="relative">
        {isNewProduct && <h2 className="uppercase absolute top-0 left-0 font-bold text-sm px-6 py-2 z-10">New Product</h2>}
        <Image priority src={image} alt={title} width={300} height={400} className="blur-[0.5px] w-[168px] md:w-full h-[224px] md:h-[400px] object-contain" />
        {isProductOutOfStack && (
          <div className="absolute top-[40%] w-full py-5 bg-white">
            <h4 className="uppercase flex font-bold justify-center items-center text-xl text-[#252020]">Out of Stock</h4>
          </div>
        )}
      </div>
      <div className="py-4 flex items-start gap-2 md:items-end">
        <div className="w-[85%]">
          <h2 className="text-sm md:text-lg font-semibold uppercase truncate">{title}</h2>
          <div className="flex gap-2 text-[10px] md:text-sm mt-1 items-end">
            {isNewProduct ? (
              <div className="flex items-center gap-2">
                <p>Rs. 489</p>
                <p className="line-through text-[#888792] text-xs">Rs. 400</p>
                <p className="text-red-500">(20% Off)</p>
              </div>
            ) : (
              <p className="text-[#888792]">
                <span className="underline cursor-pointer">Sign in</span> or Create an account to see pricing
              </p>
            )}
          </div>
        </div>
        <Image priority src={WishListIcon} className="sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer" alt="wishlist" />
      </div>
    </div>
  );
};

export default Product;
