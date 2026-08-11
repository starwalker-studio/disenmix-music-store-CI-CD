import clsx from "clsx";
import type { FormFieldsProps } from "../ts/form-product.interface";

export const FormCategoryBrandFields = ({
  formData,
  style,
  handleChange,
  brands,
  categories,
  error,
  mode,
}: FormFieldsProps) => {
  return (
    <>
      <div className={style.form_row_brand_catego}>
        <div className={clsx(style.field, error && style.error)}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="id_category"
            value={formData?.id_category}
            onChange={handleChange}
            disabled={mode === "edit"}
          >
            <option value={0} disabled>
              Select category
            </option>
            {categories &&
              categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className={clsx(style.field, error && style.error)}>
          <label htmlFor="brand">Brand</label>
          <select
            id="brand"
            name="id_brand"
            value={formData?.id_brand}
            onChange={handleChange}
            disabled={mode === "edit"}
          >
            <option value={0} disabled>
              Select brand
            </option>
            {brands &&
              brands.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.brand}
                </option>
              ))}
          </select>
        </div>
        <div className={style.field}>
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData && formData.model}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      {error && <span className={style.error}>{error}</span>}
    </>
  );
};
