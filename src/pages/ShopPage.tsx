import Carts from "../Cart";
import ProductList from "../ProductList";
import { useState } from "react";

const ShopPage = () => {
  const [theme, setTheme] = useState("white");
  console.log("render ShopPage");

  return (
    <div className={`container mx-auto bg-${theme}`}>
      <h1 className="text-2xl text-center my-3">Cửa hàng văn phòng phẩm</h1>
      <button
        className="bg-blue-500 text-white mb-2 rounded-xl p-2 "
        onClick={() => setTheme(theme === "black" ? "white" : "black")}
      >
        Toggle theme({theme})
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProductList />
        <Carts />
      </div>
    </div>
  );
};

export default ShopPage;
