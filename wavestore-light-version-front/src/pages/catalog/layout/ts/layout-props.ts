import type { JSX } from "react";
import type {
  Brands,
  PriceRange,
  WavestoreCategory,
  WavestoreProduct,
} from "../../../../api/products/product.interface";

export type MenuProps = {
  MenuHandler: JSX.Element;
  children: JSX.Element;
  title: string;
  loadingBrands: boolean;
  loadingPriceRange: boolean;
};

export type BrandSectionProps = {
  brands: Brands[];
  checked: number[];
  sendChecked: (e: number[]) => void;
};

export type InStockMenuProps = {
  setInStock: (e: boolean) => void;
  inStock: boolean;
};

export type MenuHandlerProps = {
  brand_list: Brands[];
  checked: number[];
  sendChecked: (e: number[]) => void;
  setMin: (e: number) => void;
  setMax: (e: number) => void;
  setInStock: (e: boolean) => void;
  inStock: boolean;
  price_range: PriceRange;
  PRODUCT_CATEGORY: WavestoreCategory[];
};

export type PriceRangeMenuProps = {
  setMin: (e: number) => void;
  setMax: (e: number) => void;
  price_range: PriceRange;
};

export type DisplayProductsProps = {
  list: WavestoreProduct[];
  lastPage: number;
  currentPage: number;
  totalProducts: number;
  onPageChange: (page?: number) => void;
  category: string;
  product: string;
  loadingProducts: boolean;
};

export type PaginatorProps = {
  goToPage: (e: number) => void;
  currentPage: number;
  lastPage: number;
};

export type CategoryLinkMenuProps = {
  PRODUCT_CATEGORY: WavestoreCategory[];
};

export type ProductCardProps = {
  list: WavestoreProduct[];
  category: string;
  product: string;
};

export type BrandMenuProps = {
  brand_list: Brands[];
  checked: number[];
  sendChecked: (e: number[]) => void;
};
