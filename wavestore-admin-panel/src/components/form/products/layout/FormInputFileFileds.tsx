import clsx from "clsx";
import type { FormFieldsProps } from "../ts/form-product.interface";

export const FormInputFileFileds = ({
  style,
  isFields,
  mode,
  handleFileChange,
  handleChangeFiveFiles,
  error,
}: FormFieldsProps) => {
  return (
    <>
      <div className={style.form_input_file}>
        <div className={style.field}>
          <label
            htmlFor="image"
            className={clsx(
              style.file_label,
              !isFields && style.file_label_disabled,
            )}
          >
            Product Image
          </label>
          <div className={style.file_input}>
            <label
              htmlFor="image"
              className={clsx(
                style.file_label,
                !isFields && style.blocked,
                error && style.error,
              )}
            >
              {mode === "edit" ? "Change file..." : "Select file..."}
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              disabled={mode === "add" && !isFields}
            />
          </div>
        </div>
        <div className={style.field}>
          <label
            htmlFor="image"
            className={clsx(
              style.file_label,
              !isFields && style.file_label_disabled,
            )}
          >
            Product Gallery
          </label>

          <div className={style.file_input}>
            <label
              htmlFor="gallery"
              className={clsx(
                style.file_label,
                !isFields && style.blocked,
                error && style.error,
              )}
            >
              {mode === "edit" ? "Change files..." : "Select files..."}
            </label>
            <input
              type="file"
              id="gallery"
              name="gallery"
              accept="image/*"
              multiple
              onChange={handleChangeFiveFiles}
              disabled={mode === "add" && !isFields}
            />
          </div>
        </div>
      </div>
      
      {error && <span className={style.error}>{error}</span>}
    </>
  );
};
