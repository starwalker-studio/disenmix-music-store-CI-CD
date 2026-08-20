import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ModalProps } from "../../../components/form/products/ts/form-product.interface";
import { formatPriceParts } from "../../../components/table/ts/format";
import style from "./DeleteProduct.module.scss";

export const DeleteProduct = ({
  isOpen,
  onClose,
  productDetail,
}: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.modal_container}>
          <div className={style.icon}>!</div>
          <div className={style.modal_header}>
            <p>Are you sure to delete: </p>
            <span>{`${productDetail?.item_ID}`}</span>
            <p>?</p>
          </div>
          <div className={style.product_to_delete_detail}>
            <div>
              <div className={style.detail}>
                <p>Category: </p>
                <span>{productDetail?.category?.name}</span>
              </div>
              <div className={style.detail}>
                <p>Brand: </p>
                <span>{productDetail?.brand?.brand}</span>
              </div>
              <div className={style.detail}>
                <p>Price: </p>
                <span>
                  {formatPriceParts(
                    productDetail?.price ? productDetail?.price : 0,
                  )}
                </span>
              </div>
              <div className={style.detail}>
                <p>Status: </p>
                <span
                  className={`${style.status} ${productDetail?.in_stock ? style.status_active : style.status_inactive}`}
                >
                  {productDetail?.in_stock ? "In Stock" : "Not In Stock"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer_actions}>
          <button className={style.button_cancel} onClick={onClose}>
            Cancel
          </button>
          <button className={style.button_primary}>
            <FontAwesomeIcon icon={faTrash} />
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};
