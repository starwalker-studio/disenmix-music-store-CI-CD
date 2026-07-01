import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartStore } from "../../../api/store/cart.store";
import style from "./CartFloat.module.scss";

type CartFloatProps = {
  onClick: () => void;
};

export const CartFloat = ({ onClick }: CartFloatProps) => {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  if (totalItems === 0) return null;
  return (
    <div className={style.cart_float}>
      <button className={style.cart_btn} onClick={onClick}>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className={style.cart_badge}>{totalItems}</span>
      </button>
    </div>
  );
};
