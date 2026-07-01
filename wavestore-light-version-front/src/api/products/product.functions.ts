import { SERVER_ENV } from "../env/server.env";
import type {
  Brands,
  PaginatedResponse,
  PriceRange,
  ProductFilter,
  WavestoreCategory,
  WavestoreProduct,
  WavestoreProductImage,
} from "./product.interface";

export async function searchProductByFilter(
  filters: ProductFilter | undefined,
) {
  const queryParams = new URLSearchParams();

  if (filters?.page) queryParams.append("page", String(filters?.page));

  if (filters?.id_category !== undefined)
    queryParams.append("id_category", String(filters.id_category));

  if (filters?.in_stock !== undefined)
    queryParams.append("in_stock", String(filters.in_stock));

  if (filters?.min_price !== undefined)
    queryParams.append("min_price", String(filters.min_price));

  if (filters?.max_price !== undefined)
    queryParams.append("max_price", String(filters.max_price));

  if (filters?.id_brand?.length) {
    filters.id_brand.forEach((id) => {
      queryParams.append("id_brand[]", id.toString());
    });
  }

  const response = await fetch(
    `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.PRODUCT}/?${queryParams?.toString()}`,
    // `${SERVER_ENV.SERVER_HOST_PROD}${SERVER_ENV.PRODUCT}?${queryParams?.toString()}`,
  );

  const data: PaginatedResponse<WavestoreProduct> = await response.json();

  return data;
}

export async function searchProductBrandsByCategory(id_category: number) {
  const response = await fetch(
    `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_BRANDS_BY_CATEGORY}${id_category}`,
    // `${SERVER_ENV.SERVER_HOST_PROD}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_BRANDS_BY_CATEGORY}${id_category}`,
  );

  const data: Brands[] = await response.json();

  return data;
}

export async function searchProductPriceRange() {
  const response = await fetch(
    `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_PRICE_RANGE}`,
    // `${SERVER_ENV.SERVER_HOST_PROD}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_PRICE_RANGE}`,
  );

  const data: PriceRange = await response.json();

  return data;
}

export async function searchProductCategories() {
  const response = await fetch(
    `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_CATEGORY}`,
    // `${SERVER_ENV.SERVER_HOST_PROD}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_CATEGORY}`,
  );

  const data: WavestoreCategory[] = await response.json();

  return data;
}

export async function searchProductDetail(item_ID: string) {
  const response = await fetch(
    `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_DETAIL}${item_ID}`,
    // `${SERVER_ENV.SERVER_HOST_PROD}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_DETAIL}${item_ID}`,
  );

  const data: WavestoreProduct = await response.json();

  return data;
}

export async function searchProductGallery(item_ID: string) {
  const response = await fetch(
    `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_GALLERY}${item_ID}`,
    // `${SERVER_ENV.SERVER_HOST_PROD}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_GALLERY}${item_ID}`,
  );

  const data: WavestoreProductImage[] = await response.json();

  return data;
}
