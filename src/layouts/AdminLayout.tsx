import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 pt-14">
      <aside className="w-64 bg-gray-800 text-white p-5">
        <nav className="flex flex-col gap-4">
          <Link to="dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
          <Link to="products" className="hover:text-blue-400">
            Quản lý Sản phẩm
          </Link>
          <Link to="/" className="hover:text-blue-400 text-gray-400 mt-10">
            Về trang chủ
          </Link>
        </nav>
      </aside>

      <main className="flex-1 overflow-auto p-3">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
