import type { CartItem } from "../cart/cart.interface";
import type {
  Brands,
  PriceRange,
  ProductFilter,
  WavestoreCategory,
  WavestoreProduct,
  WavestoreProductImage,
} from "../products/product.interface";

export interface ProductStore {
  products: WavestoreProduct[];
  loadingProducts: boolean;
  loadingBrands: boolean;
  loadingPriceRange: boolean;
  loadingCategories: boolean;
  loadingProductDetail: boolean;
  loadingProductGallery: boolean;
  total: number;
  currentPage: number;
  perPage: number;
  lastPage: number;
  brands: Brands[];
  price_range: PriceRange;
  categories: WavestoreCategory[];
  productDetail: WavestoreProduct | null;
  productGallery: WavestoreProductImage[];
  clearGallery: () => void;
  clearDetail: () => void;
  fetchProducts: (filters?: ProductFilter | undefined) => Promise<void>;
  fetchProductBrands: (id_category: number) => Promise<void>;
  fetchProductPriceRange: () => Promise<void>;
  fetchProductCategories: () => Promise<void>;
  fetchProductDetail: (item_ID: string) => Promise<void>;
  fetchProductGallery: (item_ID: string) => Promise<void>;
}

export interface CartStore {
  items: CartItem[];
  addToCart: (product: WavestoreProduct) => void;
  removeFromCart: (item_ID: string) => void;
  updateQuantity: (item_ID: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getTotalItems: () => number;
}
