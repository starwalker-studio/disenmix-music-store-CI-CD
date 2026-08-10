interface AppEnv {
  API_BASE_URL: string;
  PUBLIC_BASE_URL: string;
  PRODUCT: string;
  STORE: string;
}

function getEnvVar(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(
      `Falta la variable de entorno: ${key}. Revisa tu archivo .env`,
    );
  }
  return value;
}

export const ENV: AppEnv = {
  API_BASE_URL: getEnvVar("VITE_API_BASE_URL"),
  PUBLIC_BASE_URL: getEnvVar("VITE_PUBLIC_BASE_URL"),
  PRODUCT: getEnvVar("VITE_API_PRODUCT_PATH"),
  STORE: getEnvVar("VITE_API_STORE_PATH"),
};

export const END_POINTS = {
  PRODUCT_BRANDS_BY_CATEGORY: "/brands-by-category/",
  PRODUCT_PRICE_RANGE: "/price-range",
  PRODUCT_CATEGORY: "/categories",
  PRODUCT_GALLERY: "/images/",
  PRODUCT_DETAIL: "/item/",
  CHECK_ITEM_ID: "/check-item-id/",
  CREATE_PRODUCT: "/add-product",
  CREATE_PRODUCT_GALLERY: "/add-product-gallery",
  CHECKOUT: "/checkout",
} as const;
