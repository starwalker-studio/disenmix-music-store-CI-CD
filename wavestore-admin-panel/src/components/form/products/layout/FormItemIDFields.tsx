import clsx from "clsx";
import type { FormFieldsProps } from "../ts/form-product.interface";

export const FormItemIDFields = ({
  formData,
  style,
  handleChange,
  error,
  itemIdStatus,
  mode,
}: FormFieldsProps) => {
  return (
    <>
      <div className={style.form_row_ID}>
        <div
          className={clsx(
            style.field,
            error && style.error,
            itemIdStatus === "available" && style.success,
            itemIdStatus === "taken" && style.error,
          )}
        >
          <label htmlFor="item_ID">Item ID</label>
          <input
            type="text"
            id="item_ID"
            name="item_ID"
            value={formData && formData.item_ID.trim()}
            onChange={handleChange}
            disabled={mode === "edit"}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData && formData.description}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      {itemIdStatus === "available" && (
        <span className={style.success}>✓ Available</span>
      )}
      {itemIdStatus === "taken" && (
        <span className={style.error}>This Item ID already exists!</span>
      )}
      {error && <span className={style.error}>{error}</span>}
    </>
  );
};
