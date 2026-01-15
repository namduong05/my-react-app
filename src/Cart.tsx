import React from "react";
import CartItem from "./components/CartItem";
import { useActionCart } from "./hooks/useActionCart";
import { useCartState } from "./hooks/useCarts";

const Carts = () => {
  const cart = useCartState();

  console.log("render Carts");

  const { handleClearAll } = useActionCart();
  const totalQuantity = React.useMemo(() => {
    return cart.reduce((result, item) => result + item.quantity, 0);
  }, [cart]);
  const totalPrice = React.useMemo(() => {
    return cart.reduce(
      (result, item) => result + item.price * item.quantity,
      0
    );
  }, [cart]);
  return (
    <div className="md:col-span-1">
      <div className="border border-gray-200 rounded-xl shawdow-xl px-4 py-2 sticky top-5">
        <h2 className="mb-2 flex justify-between">
          Giỏ hàng{" "}
          <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full">
            {totalQuantity}
          </span>
        </h2>
        <ul className="overflow-y-auto max-h-64">
          {cart.length === 0 ? (
            <div>Không có sản phẩm nào...</div>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </ul>
        {cart.length > 0 && (
          <>
            <div>Tổng tiền: ${totalPrice}</div>
            <button onClick={handleClearAll}> Xóa tất cả</button>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(Carts);
