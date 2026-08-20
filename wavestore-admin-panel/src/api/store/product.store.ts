import { create } from "zustand";
import {
  checkItemIdAvailability,
  createProduct,
  createProductGallery,
  deactivateProduct,
  searchProductBrandsByCategory,
  searchProductByFilter,
  searchProductCategories,
  searchProductDetail,
  searchProductGallery,
  updateProduct,
  updateProductGallery,
} from "../products/product.functions";
import type { ProductFilter } from "../products/product.interface";
import type { ProductStore } from "./store.interface";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  brands: [],
  price_range: { min_price: 0, max_price: 0 },
  loadingProducts: false,
  loadingBrands: false,
  loadingPriceRange: false,
  loadingCategories: false,
  loadingProductDetail: false,
  loadingProductGallery: false,
  total: 0,
  currentPage: 1,
  lastPage: 0,
  perPage: 10,
  categories: [],
  productDetail: null,
  productGallery: [],
  fetchProducts: async (filters: ProductFilter | undefined, itemID?: string) => {
    set({ loadingProducts: true });
    try {
      const data = await searchProductByFilter(filters, itemID);
      set({
        products: data.data,
        total: data.total,
        currentPage: data.current_page,
        perPage: data.per_page,
        lastPage: data.last_page,
        loadingProducts: false,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ loadingProducts: false });
    }
  },
  fetchProductCategories: async () => {
    set({ loadingCategories: true });
    try {
      const data = await searchProductCategories();
      set({
        categories: data,
        loadingCategories: false,
      });
    } catch (error) {
      console.error("Error fetching product categories:", error);
      set({ loadingCategories: false });
    }
  },
  fetchProductBrands: async (id_category: number) => {
    set({ loadingBrands: true });
    try {
      const data = await searchProductBrandsByCategory(id_category);
      set({
        brands: data,
        loadingBrands: false,
      });
    } catch (error) {
      console.error("Error fetching product brands:", error);
      set({ loadingBrands: false });
    }
  },
  fetchCheckItemID: async (itemID: string) => {
    try {
      const response = await checkItemIdAvailability(itemID);
      return response;
    } catch (error) {
      console.error("Error checking item ID:", error);
    }
  },
  fetchCreateProduct: async (payload: FormData) => {
    try {
      const data = await createProduct(payload);
      return data;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  },
  fetchCreateProductGallery: async (payload: FormData) => {
    try {
      const data = await createProductGallery(payload);
      return data;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  },
  fetchUpdateProduct: async (payload: FormData) => {
    try {
      const data = await updateProduct(payload);
      return data;
    } catch (error) {
      console.error("Error updating product:", error);
    }
  },
  fetchUpdateProductGallery: async (payload: FormData) => {
    try {
      const data = await updateProductGallery(payload);
      return data;
    } catch (error) {
      console.error("Error updating product:", error);
    }
  },
  fetchProductDetail: async (item_ID: string) => {
    set({ loadingProductDetail: true });
    try {
      const data = await searchProductDetail(item_ID);
      set({
        productDetail: data,
        loadingProductDetail: false,
      });
    } catch (error) {
      console.error("Error fetching product detail:", error);
      set({ loadingProductDetail: false });
    }
  },
  fetchProductGallery: async (item_ID: string) => {
    set({ loadingCategories: true });
    try {
      const data = await searchProductGallery(item_ID);
      set({
        productGallery: data,
        loadingCategories: false,
      });
    } catch (error) {
      console.error("Error fetching product gallery:", error);
      set({ loadingCategories: false });
    }
  },
  fetchDeleteProduct: async (item_ID: string) => {
    try {
      const data = await deactivateProduct(item_ID);
      return data;
    } catch (error) {
      console.error("Error deactivating product:", error);
    }
  },
}));
