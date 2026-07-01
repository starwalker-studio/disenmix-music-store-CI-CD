import type { Brands, PriceRange, WavestoreCategory, WavestoreProduct } from "../../../../api/products/product.interface";

export type ProductsProps = {
  brands: Brands[];
  checked: number[];
  setChecked: (value: React.SetStateAction<number[]>) => void;
  setMayor: (value: React.SetStateAction<number>) => void;
  setMinor: (value: React.SetStateAction<number>) => void;
  setInStock: (value: React.SetStateAction<boolean>) => void;
  inStock: boolean;
  title: string;
  price_range: PriceRange;
  categories: WavestoreCategory[];
  products: WavestoreProduct[];
  lastPage: number;
  currentPage: number;
  total: number;
  handlePageChange: (page?: number | undefined) => void;
  loadingBrands: boolean;
  loadingPriceRange: boolean;
  loadingProducts: boolean;
};