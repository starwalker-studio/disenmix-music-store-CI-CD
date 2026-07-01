import type {
  Brands,
  PriceRange,
  WavestoreCategory,
  WavestoreProduct,
} from "../../../../api/products/product.interface";

export type MobileDisplayProductsProps = {
  products: WavestoreProduct[];
  total: number;
  title: string;
  onPageChange: (page?: number | undefined) => void;
  lastPage: number;
  currentPage: number;
  brand_list: Brands[];
  checked: number[];
  sendChecked: (e: number[]) => void;
  price_range: PriceRange;
  setMax: (e: number) => void;
  setMin: (e: number) => void;
  setInStock: (e: boolean) => void;
  inStock: boolean;
  product: string;
  category: string;
  loadingProducts: boolean;
  loadingBrands: boolean;
  loadingPriceRange: boolean;
  PRODUCT_CATEGORY: WavestoreCategory[];
};

export type FilterDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  brand_list: Brands[];
  checked: number[];
  sendChecked: (e: number[]) => void;
  price_range: PriceRange;
  setMax: (e: number) => void;
  setMin: (e: number) => void;
  setInStock: (e: boolean) => void;
  inStock: boolean;
};
