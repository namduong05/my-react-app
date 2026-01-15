import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ProductFormPage from "./pages/ProductFormPage";
import DashboardPage from "./pages/DashboardPage";
import ShopPage from "./pages/ShopPage";
import ProductListPage from "./pages/ProductListPage";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-800 text-white flex gap-4 justify-center fixed z-10 top-0 left-0 right-0">
        <Link to="/" className="hover:text-yellow-400">
          Trang chủ (Shop)
        </Link>
        <Link to="/admin/products" className="hover:text-yellow-400">
          Quản trị (Admin)
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="products/add" element={<ProductFormPage />} />
          <Route path="products/edit/:id" element={<ProductFormPage />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
