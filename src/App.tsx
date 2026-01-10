import { products } from "./data/products";
import { useCart } from "./hooks/useCart";
import "./App.css";
import { useMemo } from "react";

const App = () => {
  const { cart, dispatch } = useCart();
  const totalQuantity = useMemo(() => {
    return cart.reduce((result, item) => result + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (result, item) => result + item.price * item.quantity,
      0
    );
  }, [cart]);
  return (
    <div className="container mx-auto px-8">
      <h1 className="text-2xl text-center my-3">Cửa hàng văn phòng phẩm</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-8">
          {products.map((product) => (
            <li
              key={product.id}
              className="border border-gray-200 rounded-xl shawdow-xl px-4 py-2"
            >
              <h2 className="text-xl">{product.name}</h2>
              <p className="text-xs italic my-2"> Giá: {product.price}</p>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
                className="w-full p-1 bg-green-400 hover:bg-green-500 rounded-xl cursor-pointer"
              >
                Thêm vào giỏ hàng
              </button>
            </li>
          ))}
        </ul>
        <div className="md:col-span-1">
          <div className="border border-gray-200 rounded-xl shawdow-xl px-4 py-2 sticky top-5">
            <h2 className="mb-2 flex justify-between">
              Giỏ hàng{" "}
              <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full">
                {totalQuantity}
              </span>
            </h2>
            <ul className="overflow-y-auto">
              {cart.length === 0 ? (
                <div>Không có sản phẩm nào...</div>
              ) : (
                cart.map((item) => (
                  <li
                    key={item.id}
                    className="border border-gray-200 rounded-xl shawdow-xl px-4 py-2 mb-2"
                  >
                    <div className="flex justify-around items-center">
                      <div>
                        <h2 className="text-xl">{item.name}</h2>
                        <p className="text-xs mb-2">
                          ${item.price} x {item.quantity}
                        </p>
                        <div className="flex">
                          <button
                            onClick={() =>
                              dispatch({ type: "DECREASE", payload: item.id })
                            }
                            className="border border-gray-300 bg-gray-200 px-2.5"
                          >
                            -
                          </button>
                          <span className="border border-gray-300 bg-gray-50 px-2.5">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch({ type: "ADD_TO_CART", payload: item })
                            }
                            className="border border-gray-300 bg-gray-200 px-2"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item.id })
                        }
                        className="bg-red-500 px-2 py-1 rounded-xl text-white cursor-pointer"
                      >
                        Xóa
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
            {cart.length > 0 && (
              <>
                <div>Tổng tiền: ${totalPrice}</div>
                <button onClick={() => dispatch({ type: "CLEAR" })}>
                  {" "}
                  Xóa tất cả
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
