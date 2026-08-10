// src/vite-env.d.ts

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_PRODUCT_PATH: string;
  readonly VITE_API_STORE_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
