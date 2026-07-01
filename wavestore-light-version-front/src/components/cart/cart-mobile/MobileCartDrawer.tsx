import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CartTotal } from "../layouts/cart-total/CartTotal";
import { CartItems } from "../layouts/items/CartItems";
import style from "./MobileCartDrawer.module.scss";

type MobileCartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileCartDrawer = ({
  isOpen,
  onClose,
}: MobileCartDrawerProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      <div className={style.overlay} onClick={handleClose} />
      <div
        className={`${style.drawer} ${isClosing ? style.drawer_closing : ""}`}
      >
        <div className={style.drawer_header}>
          <h3>Shopping Cart</h3>
          <button className={style.close_btn} onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className={style.drawer_total}>
          <CartTotal />
        </div>
        <div className={style.drawer_body}>
          <CartItems />
        </div>
      </div>
    </>
  );
};
