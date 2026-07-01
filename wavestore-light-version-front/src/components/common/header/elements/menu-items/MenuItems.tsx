import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../../../../../api/store/cart.store";
import style from "./MenuItems.module.scss";

export const MenuItems = () => {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <div className={style.menu_item_phone}>
        <div className={style.phone_container}>
          <span>{`(800) 224-4781`}</span>
        </div>
      </div>
      <div className={style.menu_item}>
        <div className={style.menu_item_container}>
          <NavLink to={"/contact"}></NavLink>
          <span>Contact Us</span>
        </div>
      </div>
      <div className={style.menu_item}>
        <div className={style.menu_item_container}>
          <NavLink to={"/contact"}></NavLink>
          <span>Account</span>
        </div>
      </div>
      <div className={style.menu_item}>
        <div className={style.menu_item_container}>
          <NavLink to={"/user/cart"}>
            <span className={style.icon_cart}>
              <FontAwesomeIcon icon={faCartShopping} />
              {totalItems > 0 && (
                <span className={style.cart_badge}>
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};
