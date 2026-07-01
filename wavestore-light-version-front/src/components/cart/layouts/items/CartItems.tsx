import { faCartShopping, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartStore } from "../../../../api/store/cart.store";
import { PriceFormat } from "../../../ui/price-format/PriceFormat";
import style from "./CartItems.module.scss";

export const CartItems = () => {
  const { items, updateQuantity, removeFromCart } = useCartStore();
  if (items.length === 0) {
    return (
      <div className={style.cart_empty}>
        <FontAwesomeIcon icon={faCartShopping} size="4x" />
        <h2>Your cart is empty</h2>
      </div>
    );
  }
  return (
    <>
      <div className={style.cart_items_card}>
        <div className={style.cart_items_header}>
          <h2>Shopping Cart</h2>
        </div>
        {items.map((item) => (
          <div className={style.cart_item_container} key={item.item_ID}>
            <div className={style.cart_item}>
              <div className={style.cart_item_img}>
                <img src={item.img} alt={item.model} />
                <p>
                  itemID: <span>{item.item_ID}</span>
                </p>
              </div>
              <div className={style.cart_item_detail}>
                <h3>{item.model}</h3>
                <PriceFormat price={item.price} />
                <div className={style.cart_item_quantity_buttons}>
                  <button
                    onClick={() =>
                      updateQuantity(item.item_ID, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.item_ID, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div className={style.cart_item_remove_buttom}>
                  <button onClick={() => removeFromCart(item.item_ID)}>
                    <span>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
