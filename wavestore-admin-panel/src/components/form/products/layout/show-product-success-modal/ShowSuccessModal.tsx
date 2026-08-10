import { ENV } from "../../../../../api/config/env";
import { formatPriceParts } from "../../../../table/ts/format";
import { Spinner } from "../../../../ui/spinner/Spinner";
import type { ModalProps } from "../../ts/form-product.interface";
import style from "./ShowSuccessModal.module.scss";

export const ShowSuccessModal = ({
  isOpen,
  onClose,
  productDetail,
  loadingProductDetail,
}: ModalProps) => {
  if (!isOpen) return null;
  return (
    <>
      {loadingProductDetail ? (
        <Spinner />
      ) : (
        <div className={style.overlay}>
          <div className={style.modal}>
            <div className={style.icon}>✓</div>

            <h3 className={style.title}>Product created successfully</h3>

            <h4 className={style.model}>{productDetail?.model}</h4>

            <p className={style.description}>{productDetail?.description}</p>

            <div className={style.detail_row}>
              <div className={style.product_img}>
                <img
                  src={`${ENV.PUBLIC_BASE_URL}${productDetail?.img}`}
                  alt=""
                />
              </div>
              <div className={style.product_detail}>
                <div className={style.detail}>
                  <span className={style.detail_label}>Item ID</span>
                  <span className={style.detail_value}>
                    {productDetail?.item_ID}
                  </span>
                </div>
                <div className={style.detail}>
                  <span className={style.detail_label}>In Stock</span>
                  <span
                    className={style.detail_value}
                  >{`${productDetail?.in_stock && "Available"}`}</span>
                </div>
                <div className={style.detail}>
                  <span className={style.detail_label}>Price</span>
                  <span className={style.detail_value}>
                    {formatPriceParts(
                      productDetail?.price ? productDetail?.price : 0,
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className={style.actions}>
              <button className={style.button_secondary} onClick={onClose}>
                Close
              </button>
              <button className={style.button_primary} onClick={onClose}>
                Add another product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
