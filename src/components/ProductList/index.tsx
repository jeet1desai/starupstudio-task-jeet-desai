"use client";

import React, { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Separator } from "../ui/separator";

import Product from "../Product";
import ProductLoading from "../Product/loading";
import Filter from "../Filter";

import { getAllProductsList } from "@/services/products.service";

interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const Products = () => {
  const [sortBy, setSortBy] = useState("recommended");
  const [hideFilter, setHideFilter] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [allProductList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    handleFetchProductList();
  }, []);

  const handleFetchProductList = async () => {
    const products = await getAllProductsList();
    setProductList(products);
    setLoading(false);
  };

  return (
    <div className="px-0 md:px-16 w-full">
      <div className="w-full flex items-center justify-center flex-col py-4 sm:py-8 md:py-16 px-4">
        <div className="w-full md:w-[740px] text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase mb-4">Discover Our Products</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-6 md:leading-10 lg:leading-10">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </div>
      <div className="flex items-center border-y py-2">
        <div className="w-6/12 hidden md:flex items-center uppercase gap-16">
          <h6 className="font-bold">3425 Items</h6>
          <div className="flex gap-1 text-[#888792] cursor-pointer" onClick={() => setHideFilter(!hideFilter)}>
            {hideFilter ? <ChevronRight strokeWidth={1} color="black" /> : <ChevronLeft strokeWidth={1} color="black" />}
            <p className="underline">{hideFilter ? "Show Filter" : "Hide Filter"}</p>
          </div>
        </div>
        <p className="w-6/12 md:hidden uppercase font-bold flex justify-center cursor-pointer" onClick={() => setHideFilter(!hideFilter)}>
          Filter
        </p>
        <Separator orientation="vertical" className="block md:hidden h-[25px] w-[1px] bg-[#BFC8CD]" />
        <div className="w-6/12 md:mx-8 flex justify-center md:justify-end">
          <Select value={sortBy} onValueChange={(newLangValue: string) => setSortBy(newLangValue)}>
            <SelectTrigger className="max-w-[180px] min-w-[150px]">
              <SelectValue placeholder="Eng" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="recommended">RECOMMENDED</SelectItem>
              <SelectItem value="newest first">NEWEST FIRST</SelectItem>
              <SelectItem value="popular">POPULAR</SelectItem>
              <SelectItem value="price high">PRICE: HIGH TO LOW</SelectItem>
              <SelectItem value="price low">PRICE: LOW TO HIGH</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-4 py-4 px-4 md:px-0">
        <div className={`w-full md:w-1/3 lg:w-1/4 ${hideFilter ? "hidden" : ""}`}>
          <Filter />
        </div>
        <div className={`${hideFilter ? "w-full" : "hidden md:block md:w-2/3 lg:w-3/4"}`}>
          <div
            className={`grid gap-4 grid-flow-row ${
              hideFilter ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {allProductList.map((product: IProduct) => {
              return (
                <Product
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  isNewProduct={Math.floor(Math.random() * 10) + 1 === product.id}
                  isProductOutOfStack={Math.floor(Math.random() * 10) + 1 === product.id}
                />
              );
            })}
            {loading &&
              [1, 2, 3, 4, 5].map((index) => {
                return <ProductLoading key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
