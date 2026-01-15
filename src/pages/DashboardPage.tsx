import { useProductState } from "../hooks/useProducts";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const products = useProductState();

  const stats = useMemo(() => {
    return {
      totalProducts: products.length,
      totalValue: products.reduce((sum, p) => sum + p.price, 0),
      avgPrice:
        products.length > 0
          ? Math.round(
              products.reduce((sum, p) => sum + p.price, 0) / products.length
            )
          : 0,
    };
  }, [products]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1: Tổng sản phẩm */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium uppercase">
            Tổng sản phẩm
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {stats.totalProducts}
          </p>
          <span className="text-xs text-green-500 flex items-center mt-2">
            +5000 mới thêm hôm nay
          </span>
        </div>

        {/* Card 2: Tổng giá trị hàng hóa */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium uppercase">
            Tổng giá trị kho
          </h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">
            ${stats.totalValue.toLocaleString()}
          </p>
          <span className="text-xs text-gray-400 mt-2">
            Tính trên giá niêm yết
          </span>
        </div>

        {/* Card 3: Giá trung bình */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium uppercase">
            Giá trung bình
          </h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            ${stats.avgPrice}
          </p>
          <span className="text-xs text-gray-400 mt-2">Mỗi sản phẩm</span>
        </div>
      </div>

      {/* Khu vực Quick Actions (Hành động nhanh) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-4">Hành động nhanh</h2>
        <div className="flex gap-4">
          <Link
            to="/admin/products/add"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            + Thêm sản phẩm mới
          </Link>
          <Link
            to="/admin/products"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
          >
            Xem danh sách
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
