import { products } from "./data/products";
import "./App.css";
import Carts from "./Cart";
import Products from "./Product";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("white");
  console.log("render App");

  return (
    <div className={`container mx-auto px-8 bg-${theme}`}>
      <h1 className="text-2xl text-center my-3">Cửa hàng văn phòng phẩm</h1>
      <button
        className="bg-blue-500 text-white mb-2 rounded-xl p-2 "
        onClick={() => setTheme(theme === "black" ? "white" : "black")}
      >
        Toggle theme
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Products products={products} />
        <Carts />
      </div>
    </div>
  );
};

export default App;
