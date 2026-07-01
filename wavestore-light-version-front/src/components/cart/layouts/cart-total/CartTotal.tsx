import {
  faArrowRotateLeft,
  faLock,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartStore } from "../../../../api/store/cart.store";
import { useMobileScreen } from "../../../../hooks/useMobileScreen";
import style from "./CartTotal.module.scss";

export const CartTotal = () => {
  const { getTotalItems, getTotal } = useCartStore();
  const { isMobileScreen } = useMobileScreen();
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className={style.cart_total_card}>
      <div className={style.cart_estimated}>
        <p>{`Subtotal: ${getTotalItems()} items:`}</p>
        <p>${formatter.format(getTotal())}</p>
      </div>
      <div className={style.cart_estimated}>
        <p>Estimated Shipping:</p>
        <p>Free 🎉</p>
      </div>
      <div className={style.cart_pay_buttons}>
        {/* develop only */}
        {/* <button onClick={() => setCheckOut(true)}> */}
        <button>Pay with Stripe</button>
      </div>
      {!isMobileScreen() && (
        <div className={style.cart_badges}>
          <div className={style.badge_item}>
            <FontAwesomeIcon icon={faShieldHalved} />
            <span>Secure checkout</span>
          </div>
          <div className={style.badge_item}>
            <FontAwesomeIcon icon={faTruck} />
            <span>Free shipping</span>
          </div>
          <div className={style.badge_item}>
            <FontAwesomeIcon icon={faArrowRotateLeft} />
            <span>30-day returns</span>
          </div>
          <div className={style.cart_powered}>
            <FontAwesomeIcon icon={faLock} />
            <span>Powered by Stripe</span>
          </div>
        </div>
      )}
    </div>
  );
};
