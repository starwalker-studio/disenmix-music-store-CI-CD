export interface WavestoreBrand {
  id: number;
  name: string;
  created_at: string;
}

export interface WavestoreCategory {
  id: number;
  name: string;
  slug: string;
  img: string | null;
}

export interface WavestoreProductImage {
  id: number;
  item_ID: string;
  url: string;
  sort_order: number;
}

export interface WavestoreProduct {
  id: number;
  item_ID: string;
  id_brand: number;
  id_category: number;
  model: string;
  in_stock: boolean;
  description: string | null;
  product_info: string | null;
  price: string;
  img: string | null;
  created_at: string;
  updated_at: string;
  brand?: WavestoreBrand;
  category?: WavestoreCategory;
}

export type ProductFilter = {
  page?: number;
  in_stock?: number;
  min_price?: number;
  max_price?: number;
  id_category?: number;
  id_brand?: number[];
};

export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  per_page: number;
  total: number;
  last_page: number;
}

export interface Brands {
  id: number;
  brand: string;
}

export interface PriceRange {
  min_price: number;
  max_price: number;
}
