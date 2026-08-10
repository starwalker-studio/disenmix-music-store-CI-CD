import { useEffect, useState } from "react";
import { useProductStore } from "../../../../api/store/product.store";
import type { ProductFormData } from "./form-product.interface";

export const useFormProduct = () => {
  const REQUIRED_GALLERY_IMAGES = 5;

  const {
    fetchProductCategories,
    fetchProductBrands,
    categories,
    brands,
    fetchCreateProduct,
    fetchCreateProductGallery,
    fetchCheckItemID,
    fetchProductDetail,
    productDetail,
    loadingProductDetail,
  } = useProductStore();

  const [fileName, setFileName] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFields, setIsFields] = useState<boolean>(false);
  const [hasItemID, setHasItemID] = useState(false);
  const [hasSelectedInputs, setHasSelectedInputs] = useState(false);
  const [itemIdStatus, setItemIdStatus] = useState<
    "idle" | "available" | "taken"
  >("idle");
  const [hasFiles, setHasFiles] = useState(false);
  const [errors, setErrors] = useState<{
    itemID?: string;
    selectedInputs?: string;
    files?: string;
  }>({});

  const [formData, setFormData] = useState<ProductFormData>({
    item_ID: "",
    id_brand: 0,
    id_category: 0,
    model: "",
    in_stock: true,
    description: "",
    product_info: "",
    price: "",
    img: "",
    gallery: [],
    imgData: null,
    galleryData: [],
    imgPath: "",
    galleryPath: "",
  });

  const areRequiredFieldsComplete = (data: ProductFormData): boolean => {
    return (
      data.item_ID.trim().length > 0 &&
      data.id_category !== 0 &&
      data.id_brand !== 0
    );
  };

  const areItemFieldComplete = (data: ProductFormData): boolean => {
    return data.item_ID.trim().length > 0;
  };

  const areSelectedInputsFields = (data: ProductFormData): boolean => {
    return data.id_category !== 0 && data.id_brand !== 0;
  };

  const areInputFiles = (data: ProductFormData): boolean => {
    return (
      data.imgData !== null &&
      data.galleryData.length === REQUIRED_GALLERY_IMAGES
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    const numericFields = ["id_category", "id_brand", "price"];
    const parsedValue = numericFields.includes(name) ? Number(value) : value;

    setFormData((prev) => {
      const updated = { ...prev, [name]: parsedValue };
      setHasItemID(areItemFieldComplete(updated));
      setHasSelectedInputs(areSelectedInputsFields(updated));
      setHasFiles(areInputFiles(updated));
      setIsFields(areRequiredFieldsComplete(updated));
      return updated;
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!isFields) {
      return;
    }
    if (!file) {
      setErrors({ files: "Must upload 1 file!" });
      return;
    }
    if (!formData.item_ID.trim()) {
      e.target.value = "";
      return;
    }
    setErrors({});
    const extension = file.name.split(".").pop();
    const renamedFile = new File([file], `${formData.item_ID}.${extension}`, {
      type: file.type,
    });
    const selectedCategory = categories.find(
      (c) => c.id === formData.id_category,
    );
    const selectedBrand = brands.find((c) => c.id === formData.id_brand);
    const categorySlug = selectedCategory?.slug ?? "";
    const brandSlug = selectedBrand?.brand.toLocaleLowerCase() ?? "";

    setFormData((prev) => {
      const updated = {
        ...prev,
        imgData: renamedFile,
        img: `/img/items/${categorySlug}/${brandSlug}/${formData.item_ID}.${extension}`,
        imgPath: `/img/items/${categorySlug}/${brandSlug}`,
      };
      setHasFiles(areInputFiles(updated));
      return updated;
    });
  };

  const handleChangeFiveFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (!isFields) {
      return;
    }
    if (selectedFiles.length !== REQUIRED_GALLERY_IMAGES) {
      setErrors({ files: "Must upload 5 files!" });
      e.target.value = "";
      return;
    }
    setErrors({});
    const selectedCategory = categories.find(
      (c) => c.id === formData.id_category,
    );
    const selectedBrand = brands.find((c) => c.id === formData.id_brand);
    const categorySlug = selectedCategory?.slug ?? "";
    const brandSlug = selectedBrand?.brand.toLocaleLowerCase() ?? "";
    const renamedFiles: File[] = [];
    const galleryPaths: string[] = [];

    selectedFiles.forEach((file, index) => {
      const extension = file.name.split(".").pop();
      const name = `${formData.item_ID}-${index + 1}.${extension}`;
      renamedFiles.push(new File([file], name, { type: file.type }));
      galleryPaths.push(
        `/img/items/${categorySlug}/${brandSlug}/${formData.item_ID}/${name}`,
      );
    });

    setFormData((prev) => {
      const updated = {
        ...prev,
        galleryData: renamedFiles,
        gallery: galleryPaths,
        galleryPath: `/img/items/${categorySlug}/${brandSlug}/${formData.item_ID}`,
      };
      setHasFiles(areInputFiles(updated));
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasItemID) {
      setErrors({ itemID: "Set item ID to your product!" });
      return;
    }
    if (!hasSelectedInputs) {
      setErrors({ selectedInputs: "Must select category and brand!" });
      return;
    }
    if (!hasFiles) {
      setErrors({ files: "Upload files!" });
      return;
    }
    if (!formData.imgData) {
      setErrors({ files: "No file content" });
      return;
    }
    if (!hasItemID || itemIdStatus === "taken") {
      setErrors({ itemID: "Set Item ID valid or available" });
      return;
    }
    setErrors({});
    setSubmitting(true);
    const productPayload = new FormData();
    productPayload.append("item_ID", formData.item_ID);
    productPayload.append("id_brand", String(formData.id_brand));
    productPayload.append("id_category", String(formData.id_category));
    productPayload.append("model", formData.model);
    productPayload.append("in_stock", formData.in_stock ? "1" : "0");
    productPayload.append("description", formData.description);
    productPayload.append("product_info", formData.product_info);
    productPayload.append("price", formData.price);
    productPayload.append("img", formData.img);
    productPayload.append("imgPath", formData.imgPath);
    productPayload.append("imgData", formData.imgData);
    try {
      const productResult = await fetchCreateProduct(productPayload);

      if (!productResult?.isCreated) {
        setErrors({ files: "Error on create product" });
        setSubmitting(false);
        return;
      }
      const galleryPayload = new FormData();
      galleryPayload.append("item_ID", formData.item_ID);
      galleryPayload.append("galleryPath", formData.galleryPath);

      formData.galleryData.forEach((file) => {
        galleryPayload.append("galleryData[]", file);
      });
      formData.gallery.forEach((path) => {
        galleryPayload.append("gallery[]", path);
      });

      const galleryResult = await fetchCreateProductGallery(galleryPayload);
      if (!galleryResult?.isCreated) {
        setErrors({ files: "Product created, gallery failed" });
        return;
      }
      if (productResult?.isCreated && galleryResult?.isCreated) {
        await fetchProductDetail(formData.item_ID);
        setSuccess(true);
        setSubmitting(false);
        setFormData({
          item_ID: "",
          id_brand: 0,
          id_category: 0,
          model: "",
          in_stock: true,
          description: "",
          product_info: "",
          price: "",
          img: "",
          gallery: [],
          imgData: null,
          galleryData: [],
          imgPath: "",
          galleryPath: "",
        });
        setItemIdStatus("idle");
      }
    } catch (error) {
      console.error(error);
      setErrors({ files: "Error during the creation of product" });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchProductCategories();
  }, []);

  useEffect(() => {
    if (formData.id_category !== 0) {
      fetchProductBrands(formData.id_category);
    }
  }, [formData.id_category]);

  useEffect(() => {
    const itemId = formData.item_ID.trim();
    if (!itemId) return;
    const timeoutId = setTimeout(async () => {
      const isAvailable = await fetchCheckItemID(itemId);
      setItemIdStatus(isAvailable ? "available" : "taken");
    }, 500);

    return () => clearTimeout(timeoutId); // cancela el timer anterior si el usuario sigue escribiendo
  }, [formData.item_ID]);

  return {
    formData,
    isFields,
    hasFiles,
    submitting,
    fileName,
    errors,
    categories,
    brands,
    handleChange,
    handleFileChange,
    handleChangeFiveFiles,
    handleSubmit,
    itemIdStatus,
    success,
    productDetail,
    loadingProductDetail,
    setSuccess,
  };
};
