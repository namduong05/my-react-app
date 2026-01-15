import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { useActionProduct } from "../hooks/useActionProduct";
import { useProductState } from "../hooks/useProducts";

// 1. Định nghĩa Schema Validation (Luật lệ)
const productSchema = z.object({
  name: z.string().min(3, "Tên sản phẩm phải có ít nhất 3 ký tự"),
  price: z.number().min(1, "Giá phải lớn hơn 0"),
  // category: z.string().nonempty("Vui lòng chọn danh mục"),
});

// Tạo kiểu dữ liệu từ Schema (không cần viết interface thủ công)
type ProductFormValues = z.infer<typeof productSchema>;

const ProductFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy ID từ URL (nếu đang sửa)
  const isEditMode = !!id; // Convert sang boolean

  const { handleAddProduct, handleEditProduct } = useActionProduct();
  const products = useProductState();

  // 2. Setup Form Hook
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      // category: "",
    },
  });

  // 1. LOGIC ĐIỀN DỮ LIỆU CŨ (Nếu đang sửa)
  useEffect(() => {
    if (isEditMode && id) {
      // Tìm sản phẩm trong Context có ID trùng với URL
      const productToEdit = products.find((p) => p.id === id);

      if (productToEdit) {
        // Nếu tìm thấy, điền vào form
        // (Lưu ý: productToEdit có thể có thừa trường id, nhưng reset sẽ chỉ lấy field khớp với form)
        reset({
          name: productToEdit.name,
          price: productToEdit.price,
          // category: productToEdit.category // Nếu data cũ chưa có category thì coi chừng lỗi chỗ này
        });

        // Hoặc dùng setValue thủ công nếu muốn an toàn:
        // setValue("name", productToEdit.name);
        // setValue("price", productToEdit.price);
      } else {
        // Nếu nhập ID lung tung trên URL -> Đá về trang danh sách
        navigate("/admin/products");
      }
    }
  }, [id, isEditMode, products, reset, navigate]);

  // 3. Hàm xử lý khi Submit thành công
  const onSubmit = (data: ProductFormValues) => {
    if (isEditMode && id) {
      handleEditProduct({ id, ...data });
      alert("Cập nhật thành công!");
    } else {
      handleAddProduct({ id: crypto.randomUUID(), ...data });
      alert("Lưu thành công!");
    }

    navigate("/admin/products"); // Chuyển trang về danh sách
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-5">
        {isEditMode ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Input Tên */}
        <div>
          <label className="block mb-1 font-medium">Tên sản phẩm</label>
          <input
            {...register("name")} // Kết nối input với Hook Form
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Nhập tên..."
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Input Giá */}
        <div>
          <label className="block mb-1 font-medium">Giá ($)</label>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })} // Ép kiểu sang số
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Select Danh mục */}
        {/* <div>
          <label className="block mb-1 font-medium">Danh mục</label>
          <select
            {...register("category")}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="electronics">Điện tử</option>
            <option value="clothing">Thời trang</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div> */}

        <div className="flex gap-2 mt-5">
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {isEditMode ? "Cập nhật" : "Thêm mới"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFormPage;
