import { Link } from "react-router-dom";
import { useProductDispatch, useProductState } from "../hooks/useProducts";

const ProductListPage = () => {
  const products = useProductState();
  const dispatch = useProductDispatch();

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      dispatch({ type: "DELETE_PRODUCT", payload: id });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Danh sách sản phẩm</h1>
        <Link
          to="/admin/products/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Thêm mới
        </Link>
      </div>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-medium text-gray-600">Tên sản phẩm</th>
              <th className="p-4 font-medium text-gray-600">Giá</th>
              <th className="p-4 font-medium text-gray-600">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-green-600 font-bold">${p.price}</td>
                <td className="p-4">
                  <Link
                    to={`/admin/products/edit/${p.id}`}
                    className="text-blue-600 hover:underline mr-4"
                  >
                    Sửa
                  </Link>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-500 hover:underline"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <p className="text-center p-8 text-gray-500">Chưa có sản phẩm nào.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
