import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ProductProvider } from "./context/ProductContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import RefreshCart from "./components/RefreshCart";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <RefreshCart />
        <App />
      </CartProvider>
    </ProductProvider>
  </StrictMode>
);
