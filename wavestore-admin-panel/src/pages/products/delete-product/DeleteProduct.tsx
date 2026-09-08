import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import type { WavestoreResponse } from "../../../api/products/product.interface";
import { useProductStore } from "../../../api/store/product.store";
import type { ModalProps } from "../../../components/form/products/ts/form-product.interface";
import { formatPriceParts } from "../../../components/table/ts/format";
import style from "./DeleteProduct.module.scss";

export const DeleteProduct = ({
  isOpen,
  onClose,
  productDetail,
}: ModalProps) => {
  const { fetchDeleteProduct } = useProductStore();
  const [deactivateResult, setDeactivateResult] = useState<WavestoreResponse>();
  if (!isOpen) return null;
  const handleDelete = async () => {
    if (!productDetail?.item_ID) return;

    try {
      const result = await fetchDeleteProduct(productDetail.item_ID);
      setDeactivateResult(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.modal_container}>
          {deactivateResult?.isDeleted ? (
            <span>{deactivateResult.message}</span>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className={style.footer_actions}>
          <button className={style.button_cancel} onClick={onClose}>
            {deactivateResult?.isDeleted ? "Close" : "Cancel"}
          </button>
          {!deactivateResult?.isDeleted && (
            <button className={style.button_primary} onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
              Delete Product
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
