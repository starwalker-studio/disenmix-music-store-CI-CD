import type {
  Brands,
  WavestoreCategory,
  WavestoreProduct,
  WavestoreProductImage,
} from "../../../../api/products/product.interface";

export interface ProductFormData {
  item_ID: string;
  id_brand: number;
  id_category: number;
  model: string;
  in_stock: boolean;
  description: string;
  product_info: string;
  price: string;
  img: string;
  gallery: string[];
  imgData: File | null;
  imgPath: string;
  galleryData: File[];
  galleryPath: string;
}

export interface ProductSearch {
  item_ID: string;
  id_brand: number;
  id_category: number;
  in_stock: boolean;
}

export interface FormFieldsProps {
  formData?: ProductFormData;
  style: CSSModuleClasses;
  handleChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  categories?: WavestoreCategory[];
  brands?: Brands[];
  isFields?: boolean;
  initialData?: WavestoreProduct;
  mode?: "add" | "edit";
  fileName?: string;
  error?: string;
  itemIdStatus?: string;
  productGallery?: WavestoreProductImage[];
  handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeFiveFiles?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ExistingProduct {
  id: number;
  name: string;
  price: string;
  category: string;
  img: string;
}

export interface ModalProps {
  isOpen: boolean;
  loadingProductDetail?: boolean;
  onClose: () => void;
  onNavigate?: () => void;
  productDetail?: WavestoreProduct | null;
}
