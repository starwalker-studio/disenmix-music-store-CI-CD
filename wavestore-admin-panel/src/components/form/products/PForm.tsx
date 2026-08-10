import { FormCategoryBrandFields } from "./layout/FormCategoryBrandFields";
import { FormInputFileFileds } from "./layout/FormInputFileFileds";
import { FormItemIDFields } from "./layout/FormItemIDFields";
import { ShowSuccessModal } from "./layout/show-product-success-modal/ShowSuccessModal";
import style from "./PForm.module.scss";
import { useFormProduct } from "./ts/form-functions";
import type { ExistingProduct } from "./ts/form-product.interface";

interface ProductFormProps {
  mode: "add" | "edit";
  initialData?: ExistingProduct; // solo se pasa en modo "edit"
  onSuccess?: () => void; // callback opcional, ej. cerrar modal o redirigir
}

export const PForm = ({ mode, initialData, onSuccess }: ProductFormProps) => {
  const {
    formData,
    isFields,
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
  } = useFormProduct();

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
          <h5>Add a new product to your store</h5>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <FormItemIDFields
            formData={formData}
            handleChange={handleChange}
            style={style}
            error={errors.itemID}
            itemIdStatus={itemIdStatus}
          />
          <FormCategoryBrandFields
            formData={formData}
            handleChange={handleChange}
            style={style}
            brands={brands}
            categories={categories}
            error={errors.selectedInputs}
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
          <span>
            To select an image you have to create an item ID, select category
            and brand
          </span>
          <FormInputFileFileds
            style={style}
            isFields={isFields}
            initialData={initialData}
            mode={mode}
            fileName={fileName}
            handleFileChange={handleFileChange}
            handleChangeFiveFiles={handleChangeFiveFiles}
            error={errors.files}
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
