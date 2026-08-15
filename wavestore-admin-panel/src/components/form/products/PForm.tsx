import { ENV } from "../../../api/config/env";
import type { WavestoreProduct } from "../../../api/products/product.interface";
import { ToggleSwitch } from "../../ui/toggle-switch/ToggleSwitch";
import { FormCategoryBrandFields } from "./layout/FormCategoryBrandFields";
import { FormInputFileFileds } from "./layout/FormInputFileFileds";
import { FormItemIDFields } from "./layout/FormItemIDFields";
import { ShowSuccessModal } from "./layout/show-product-success-modal/ShowSuccessModal";
import style from "./PForm.module.scss";
import { useFormProduct } from "./ts/form-functions";

interface ProductFormProps {
  mode: "add" | "edit";
  initialData?: WavestoreProduct;
}

export const PForm = ({ mode, initialData }: ProductFormProps) => {
  const {
    formData,
    isFields,
    submitting,
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
    productGallery,
    setWantsToReplacePhotos,
    wantsToReplacePhotos,
    imgPreview,
    galleryPreviews,
  } = useFormProduct(mode, initialData);

  const displayImg = imgPreview
    ? imgPreview
    : mode === "edit" && initialData?.img
      ? `${ENV.PUBLIC_BASE_URL}${initialData.img}`
      : null;

  const displayGallery =
    galleryPreviews.length > 0
      ? galleryPreviews
      : mode === "edit" && productGallery
        ? productGallery.map((img) => `${ENV.PUBLIC_BASE_URL}${img.url}`)
        : [];

  return (
    <>
      <ShowSuccessModal
        isOpen={success}
        loadingProductDetail={loadingProductDetail}
        productDetail={productDetail}
        onClose={() => setSuccess(false)}
      />
      <div className={style.form_card}>
        <div className={style.form_header}>
          <h3>
            {mode === "add"
              ? "Add a new product to your store"
              : `${initialData?.model}`}
          </h3>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <FormItemIDFields
            formData={formData}
            handleChange={handleChange}
            style={style}
            error={errors.itemID}
            itemIdStatus={itemIdStatus}
            mode={mode}
            initialData={initialData}
          />
          <FormCategoryBrandFields
            formData={formData}
            handleChange={handleChange}
            style={style}
            brands={brands}
            categories={categories}
            error={errors.selectedInputs}
            mode={mode}
          />
          <div className={style.field}>
            <label htmlFor="product_info">Product Info</label>
            <textarea
              id="product_info"
              name="product_info"
              value={formData.product_info}
              onChange={handleChange}
              required
            />
          </div>
          {mode === "add" && (
            <span>
              To select an image you have to create an item ID, select category
              and brand
            </span>
          )}

          {mode === "edit" && (
            <ToggleSwitch
              checked={wantsToReplacePhotos}
              onChange={setWantsToReplacePhotos}
              label="Replace product photos"
            />
          )}

          {(wantsToReplacePhotos || mode === "add") && (
            <>
              <FormInputFileFileds
                style={style}
                isFields={isFields}
                mode={mode}
                handleFileChange={handleFileChange}
                handleChangeFiveFiles={handleChangeFiveFiles}
                error={errors.files}
              />
            </>
          )}
          {displayImg && (
            <div className={style.preview}>
              <div className={style.data_title}>
                <div className={style.product_image}>
                  <img src={displayImg} alt="Product preview" />
                </div>
                <span>Display</span>
              </div>
              {displayGallery.length > 0 && (
                <div className={style.data_title}>
                  <div className={style.gallery}>
                    {displayGallery.map((url, index) => (
                      <div key={index}>
                        <img src={url} alt={`Gallery ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <span>Gallery</span>
                </div>
              )}
            </div>
          )}

          <div className={style.form_row_stock_price}>
            <div className={style.field}>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className={style.submit_button}
              disabled={submitting}
            >
              {submitting
                ? "Guardando..."
                : mode === "edit"
                  ? "Update product"
                  : "Save product"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
