import type {
  Brands,
  PriceRange,
  ProductFilter,
  WavestoreCategory,
  WavestoreProduct,
  WavestoreProductImage,
  WavestoreResponse,
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
  //   clearGallery: () => void;
  //   clearDetail: () => void;
  fetchProducts: (
    filters?: ProductFilter | undefined,
    itemID?: string,
  ) => Promise<void>;
  fetchProductBrands: (id_category: number) => Promise<void>;
  //   fetchProductPriceRange: () => Promise<void>;
  fetchCheckItemID: (itemID: string) => Promise<boolean>;
  fetchProductCategories: () => Promise<void>;
  fetchCreateProduct: (payload: FormData) => Promise<WavestoreResponse>;
  fetchCreateProductGallery: (payload: FormData) => Promise<WavestoreResponse>;
  fetchUpdateProduct: (payload: FormData) => Promise<WavestoreResponse>;
  fetchUpdateProductGallery: (payload: FormData) => Promise<WavestoreResponse>;
  fetchProductDetail: (item_ID: string) => Promise<void>;
  fetchProductGallery: (item_ID: string) => Promise<void>;
  fetchDeleteProduct: (item_ID: string) => Promise<void>;
}
