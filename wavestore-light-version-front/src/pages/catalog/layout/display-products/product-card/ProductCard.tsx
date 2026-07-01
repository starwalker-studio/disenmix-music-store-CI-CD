import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../../../api/store/cart.store";
import { Button } from "../../../../../components/ui/button/Button";
import { PriceFormat } from "../../../../../components/ui/price-format/PriceFormat";
import { useMenu } from "../../../../../hooks/useMenu";
import type { ProductCardProps } from "../../ts/layout-props";
import style from "./ProductCard.module.scss";

export const ProductCard = ({ list, category, product }: ProductCardProps) => {
  const { setProductDetailLink } = useMenu();
  const { addToCart } = useCartStore();
  return (
    <>
      {list.map((item) => (
        <div className={style.product} key={item.id}>
          <Link to={setProductDetailLink(category, item, product)}>
            <div className={style.card}>
              <img
                src={`${item?.img}`}
                className={style.card_img}
                alt="product"
                sizes="(min-width: 1440px) 215px, 140px"
              />
            </div>
            {item.in_stock ? (
              <div className={style.product_avail}>
                <strong className={style.avail_summary}>
                  <span>
                    <FontAwesomeIcon icon={faCheck} size="1x" />
                  </span>
                  In Stock!
                </strong>
              </div>
            ) : (
              <div className={style.product_avail}>
                <strong className={style.avail_not_stock}>Not In Stock!</strong>
              </div>
            )}
            <div className={style.info}>
              <h2 className={style.model}>{item.model}</h2>
              <em>
                <PriceFormat price={item.price} />
              </em>
            </div>
          </Link>
          <div className={style.add_cart_button}>
            <Button label="Add to Cart" onClick={() => addToCart(item)} />
          </div>
        </div>
      ))}
    </>
  );
};
