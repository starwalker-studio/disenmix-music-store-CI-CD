import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { WavestoreProduct } from "../../api/products/product.interface";
import { useProductStore } from "../../api/store/product.store";
import type { ProductSearch } from "../../components/form/products/ts/form-product.interface";

export const useProductSearch = () => {
  const navigate = useNavigate();
  const {
    fetchProducts,
    products,
    currentPage,
    lastPage,
    fetchProductCategories,
    categories,
    fetchProductBrands,
    brands,
    loadingProducts,
  } = useProductStore();

  const [isModal, setIsModal] = useState<boolean>(false);

  const [productToDelete, setProductToDelete] = useState<WavestoreProduct>();

  const [productSearch, setProductSearch] = useState<ProductSearch>({
    item_ID: "",
    id_brand: 0,
    id_category: 0,
    in_stock: false,
  });

  const EMPTY_PRODUCT_SEARCH: ProductSearch = {
    item_ID: "",
    id_brand: 0,
    id_category: 0,
    in_stock: false,
  };

  const isSearchActive = (search: ProductSearch): boolean => {
    return JSON.stringify(search) !== JSON.stringify(EMPTY_PRODUCT_SEARCH);
  };

  const onEdit = (product: WavestoreProduct) => {
    navigate("/products/edit", { state: product });
  };

  const onView = (product: WavestoreProduct) => {
    navigate("/products/view-product", { state: product });
  };

  const onDeactivate = (product: WavestoreProduct) => {
    setProductToDelete(product);
    setIsModal(true);
  };

  const onCloseModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    fetchProductCategories();
  }, []);

  useEffect(() => {
    if (productSearch.id_category !== 0) {
      fetchProductBrands(productSearch.id_category);
    }
  }, [productSearch.id_category]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchProducts(
        {
          page: 1,
          id_category: productSearch.id_category || undefined,
          id_brand: productSearch.id_brand || undefined,
          in_stock: productSearch.in_stock ? 1 : undefined,
        },
        productSearch.item_ID || undefined,
      );
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [productSearch]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    const numericFields = ["id_category", "id_brand"];
    const parsedValue = numericFields.includes(name) ? Number(value) : value;
    setProductSearch((prev) => {
      const updated = { ...prev, [name]: parsedValue };
      if (name === "id_category") {
        updated.id_brand = 0;
      }
      return updated;
    });
  };

  const handleInStockChange = (checked: boolean) => {
    setProductSearch((prev) => ({ ...prev, in_stock: checked }));
  };

  const handlePageChange = (page?: number) => {
    fetchProducts(
      {
        page,
        id_category: productSearch.id_category || undefined,
        id_brand: productSearch.id_brand || undefined,
        in_stock: productSearch.in_stock ? 1 : undefined,
      },
      productSearch.item_ID || undefined,
    );
  };

  return {
    onEdit,
    onView,
    productSearch,
    handlePageChange,
    products,
    currentPage,
    lastPage,
    categories,
    handleChange,
    handleInStockChange,
    brands,
    loadingProducts,
    isSearchActive,
    EMPTY_PRODUCT_SEARCH,
    setProductSearch,
    onDeactivate,
    isModal,
    onCloseModal,
    productToDelete
  };
};
