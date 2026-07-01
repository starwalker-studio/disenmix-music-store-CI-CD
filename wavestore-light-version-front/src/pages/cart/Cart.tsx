import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useCartStore } from "../../api/store/cart.store";
import { CartTotal } from "../../components/cart/layouts/cart-total/CartTotal";
import { CartItems } from "../../components/cart/layouts/items/CartItems";
import { LocationSection } from "../home/components/location/LocationSection";
import { Adv } from "./advertisment/Adv";
import style from "./Cart.module.scss";

export const Cart = () => {
  const { items } = useCartStore();
  // const [checkOut, setCheckOut] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (items.length === 0) {
    return (
      <div className={style.cart_section}>
        <div className={style.cart_container}>
          <div className={style.cart_wrapper}>
            <div className={style.cart_empty}>
              <FontAwesomeIcon icon={faCartShopping} size="4x" />
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added anything yet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.cart_section}>
      <Adv />
      <div className={style.cart_container}>
        <div className={style.cart_wrapper}>
          <div className={style.cart_row}>
            <CartItems />
            <CartTotal />
          </div>
        </div>
      </div>
      {/* develop only */}
      {/* <CheckoutModal isOpen={checkOut} onClose={() => setCheckOut(false)} /> */}
      <LocationSection />
    </div>
  );
};
