import { useEffect, useState } from "react";
import { useProductStore } from "../../../api/store/product.store";
import { useMenu } from "../../../hooks/useMenu";
import { PRODUCT_ENV } from "../layout/ts/env";
import { Products } from "../utils/Products";

export const AccesoriesProducts = () => {
  const {
    products,
    loadingBrands,
    loadingPriceRange,
    loadingProducts,
    fetchProducts,
    fetchProductBrands,
    fetchProductPriceRange,
    fetchProductCategories,
    lastPage,
    currentPage,
    total,
    brands,
    price_range,
    categories,
  } = useProductStore();
  const { checked, setChecked } = useMenu();
  const [mayor, setMayor] = useState(0);
  const [minor, setMinor] = useState(0);
  const [inStock, setInStock] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    fetchProductBrands(4);
    fetchProductPriceRange();
    fetchProductCategories();
  }, []);

  useEffect(() => {
    fetchProducts({
      page: 1,
      id_category: 4,
      in_stock: inStock ? 1 : undefined,
      min_price: minor || undefined,
      max_price: mayor || undefined,
      id_brand: checked.length ? checked : undefined,
    });
  }, [inStock, minor, mayor, checked]);

  const handlePageChange = (page?: number) => {
    fetchProducts({
      page,
      id_category: 4,
      in_stock: inStock ? 1 : undefined,
      min_price: minor || undefined,
      max_price: mayor || undefined,
      id_brand: checked.length ? checked : undefined,
    });
  };
  return (
    <>
      <Products
        brands={brands}
        categories={categories}
        checked={checked}
        setChecked={setChecked}
        setMayor={setMayor}
        setMinor={setMinor}
        setInStock={setInStock}
        inStock={inStock}
        price_range={price_range}
        currentPage={currentPage}
        title={PRODUCT_ENV.TITLE.ACCESORIES}
        products={products}
        lastPage={lastPage}
        total={total}
        handlePageChange={handlePageChange}
        loadingBrands={loadingBrands}
        loadingPriceRange={loadingPriceRange}
        loadingProducts={loadingProducts}
      />
    </>
  );
};
