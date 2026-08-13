import type { WavestoreProduct } from "../../../api/products/product.interface";
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
    productGallery
  } = useFormProduct(mode, initialData);

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
          <FormInputFileFileds
            style={style}
            isFields={isFields}
            initialData={initialData}
            mode={mode}
            handleFileChange={handleFileChange}
            handleChangeFiveFiles={handleChangeFiveFiles}
            error={errors.files}
            productGallery={productGallery}
          />

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
