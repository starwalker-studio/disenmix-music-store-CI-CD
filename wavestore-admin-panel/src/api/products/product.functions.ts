import { END_POINTS, ENV } from "../config/env";
import type {
  Brands,
  //   Brands,
  PaginatedResponse,
  //   PriceRange,
  ProductFilter,
  WavestoreCategory,
  //   WavestoreCategory,
  WavestoreProduct,
  WavestoreProductImage,
} from "./product.interface";

export async function searchProductByFilter(
  filters: ProductFilter | undefined,
  itemID?: string,
) {
  const queryParams = new URLSearchParams();

  if (filters?.page) queryParams.append("page", String(filters?.page));

  if (filters?.id_category !== undefined)
    queryParams.append("id_category", String(filters.id_category));

  if (filters?.in_stock !== undefined)
    queryParams.append("in_stock", String(filters.in_stock));

  if (filters?.id_brand !== undefined)
    queryParams.append("id_brand", String(filters.id_brand));

  const searchPath = itemID ? `/${itemID}` : "";

  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${searchPath}?${queryParams?.toString()}`,
  );

  const data: PaginatedResponse<WavestoreProduct> = await response.json();

  return data;
}

export async function searchProductBrandsByCategory(id_category: number) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.PRODUCT_BRANDS_BY_CATEGORY}${id_category}`,
  );

  const data: Brands[] = await response.json();

  return data;
}

// export async function searchProductPriceRange() {
//   const response = await fetch(
//     // `${SERVER_ENV.SERVER_HOST_DOCKER}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_PRICE_RANGE}`,
//     `${SERVER_ENV.SERVER_HOST_DEV}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_PRICE_RANGE}`,
//     // `${SERVER_ENV.SERVER_HOST_PROD}${SERVER_ENV.PRODUCT}${SERVER_ENV.END_POINTS.PRODUCT_PRICE_RANGE}`,
//   );

//   const data: PriceRange = await response.json();

//   return data;
// }

export async function searchProductCategories() {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.PRODUCT_CATEGORY}`,
  );

  const data: WavestoreCategory[] = await response.json();

  return data;
}

export async function searchProductDetail(item_ID: string) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.PRODUCT_DETAIL}${item_ID}`,
  );
  const data: WavestoreProduct = await response.json();
  return data;
}

export async function searchProductGallery(item_ID: string) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.PRODUCT_GALLERY}${item_ID}`,
  );

  const data: WavestoreProductImage[] = await response.json();

  return data;
}

export async function createProduct(payload: FormData) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.CREATE_PRODUCT}`,
    {
      method: "POST",
      body: payload,
    },
  );
  if (!response.ok) {
    throw new Error(`Error creating product: ${response.status}`);
  }
  return response.json();
}

export async function createProductGallery(payload: FormData) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.CREATE_PRODUCT_GALLERY}`,
    {
      method: "POST",
      body: payload,
    },
  );
  if (!response.ok) {
    throw new Error(`Error creating gallery: ${response.status}`);
  }
  return response.json();
}

export async function updateProduct(payload: FormData) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.UPDATE_PRODUCT}`,
    {
      method: "POST",
      body: payload,
    },
  );
  if (!response.ok) {
    throw new Error(`Error updating product: ${response.status}`);
  }
  return response.json();
}

export async function updateProductGallery(payload: FormData) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.UPDATE_PRODUCT_GALLERY}`,
    {
      method: "POST",
      body: payload,
    },
  );
  if (!response.ok) {
    throw new Error(`Error updating gallery: ${response.status}`);
  }
  return response.json();
}

export async function checkItemIdAvailability(itemId: string) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}${END_POINTS.CHECK_ITEM_ID}${itemId}`,
  );

  if (!response.ok) return false;

  const data = await response.json();
  return data.available;
}

export async function deactivateProduct(item_ID: string) {
  const response = await fetch(
    `${ENV.API_BASE_URL}${ENV.PRODUCT}/delete/${item_ID}`,
    { method: "DELETE" },
  );

  if (!response.ok) {
    throw new Error(`Error deactivating product: ${response.status}`);
  }

  return response.json();
}
