import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { WavestoreProduct } from "../../../../api/products/product.interface";
import { useCartStore } from "../../../../api/store/cart.store";
import style from "./ActionButtons.module.scss";

type ActionButtonsProps = {
  item: WavestoreProduct;
};
export const ActionButtons = ({ item }: ActionButtonsProps) => {
  const { addToCart } = useCartStore();
  return (
    <div className={style.product_action}>
      {item.in_stock ? (
        <div className={style.product_avail}>
          <strong className={style.avail_summary}>
            <span>
              <FontAwesomeIcon icon={faCheck} size="1x" />
            </span>
            In Stock!
          </strong>
          <p>{`(Hurry, limited quantity available)`}</p>
        </div>
      ) : (
        <div className={style.product_avail}>
          <strong className={style.avail_not_stock}>Not In Stock!</strong>
          <p>(This product is not available)</p>
        </div>
      )}
      <div className={style.product_action_cart}>
        <div className={style.product_button_cart}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
