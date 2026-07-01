import { create } from "zustand";
import {
  searchProductBrandsByCategory,
  searchProductByFilter,
  searchProductCategories,
  searchProductDetail,
  searchProductGallery,
  searchProductPriceRange,
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
  clearGallery: () => set({ productGallery: [] }),
  clearDetail: () => set({ productDetail: null }),
  fetchProducts: async (filters: ProductFilter | undefined) => {
    set({ loadingProducts: true });
    try {
      const data = await searchProductByFilter(filters);
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
  fetchProductPriceRange: async () => {
    set({ loadingPriceRange: true });
    try {
      const data = await searchProductPriceRange();
      set({
        price_range: data,
        loadingPriceRange: false,
      });
    } catch (error) {
      console.error("Error fetching product price range:", error);
      set({ loadingPriceRange: false });
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
}));
