import clsx from "clsx";
import { ENV } from "../../../../api/config/env";
import type { FormFieldsProps } from "../ts/form-product.interface";

export const FormInputFileFileds = ({
  style,
  isFields,
  initialData,
  mode,
  handleFileChange,
  handleChangeFiveFiles,
  error,
  productGallery,
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
              disabled={!isFields}
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
              disabled={!isFields}
            />
          </div>
        </div>
      </div>
      <div className={style.preview}>
        <div className={style.data_title}>
          {mode === "edit" && initialData?.img && (
            <div className={style.product_image}>
              <img
                src={`${ENV.PUBLIC_BASE_URL}${initialData.img}`}
                alt="Imagen actual"
              />
            </div>
          )}
          <span>Display</span>
        </div>
        <div className={style.data_title}>
        {mode === "edit" && productGallery && productGallery.length > 0 && (
          <div className={style.gallery}>
            {productGallery.map((image) => (
              <div key={image.id}>
                <img
                  src={`${ENV.PUBLIC_BASE_URL}${image.url}`}
                  alt={`Gallery image ${image.sort_order}`}
                />
              </div>
            ))}
          </div>
        )}
        <span>Gallery</span>
        </div>
      </div>
      {error && <span className={style.error}>{error}</span>}
    </>
  );
};
