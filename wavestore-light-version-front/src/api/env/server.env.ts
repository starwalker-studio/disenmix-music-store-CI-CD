export interface SERVER_TYPES {
  readonly SERVER_HOST_DEV: string;
  readonly SERVER_HOST_PROD: string;
  readonly PRODUCT: string;
  readonly STORE: string;
  readonly END_POINTS: {
    readonly PRODUCT_BRANDS_BY_CATEGORY: string;
    readonly PRODUCT_PRICE_RANGE: string;
    readonly PRODUCT_CATEGORY: string;
    readonly PRODUCT_GALLERY: string;
    readonly PRODUCT_DETAIL: string;
    readonly CHECKOUT: string;
  };
}

export const SERVER_ENV: SERVER_TYPES = {
  SERVER_HOST_DEV: "http://localhost:8000/api",
  SERVER_HOST_PROD: "https://api.disenmix.com/api",
  PRODUCT: "/wavestore-product",
  STORE: "/store",
  END_POINTS: {
    PRODUCT_BRANDS_BY_CATEGORY: "/brands-by-category/",
    PRODUCT_PRICE_RANGE: "/price-range",
    PRODUCT_CATEGORY: "/categories",
    PRODUCT_GALLERY: "/images/",
    PRODUCT_DETAIL: "/item/",
    CHECKOUT: "/checkout",
  },
};
