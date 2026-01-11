import React from "react";
import ProductItem from "./components/ProductItem";
import type { Product } from "./types";

const Products = ({ products }: { products: Product[] }) => {
  console.log("render Products");

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default React.memo(Products);
