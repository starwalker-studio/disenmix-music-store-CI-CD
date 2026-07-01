import { Link } from "react-router-dom";
import { useCartStore } from "../../../../api/store/cart.store";
import { Button } from "../../../../components/ui/button/Button";
import { PriceFormat } from "../../../../components/ui/price-format/PriceFormat";
import { useMenu } from "../../../../hooks/useMenu";
import { TEST_INFO_FEATURED } from "./dummy/test-info";
import style from "./FeaturedProducts.module.scss";

export const FeaturedProducts = () => {
  const { setProductDetailLink } = useMenu();
  const { addToCart } = useCartStore();
  return (
    <section className={style.featured_section}>
      <div className={style.featured_container}>
        <div className={style.featured_wrapper}>
          <div className={style.featured_content}>
            <div className={style.featured_header}>
              <h2>Featured Products</h2>
            </div>
            <div className={style.featured_products}>
              <div className={style.featured_grid_3}>
                {TEST_INFO_FEATURED.map((item) => (
                  <div className={style.featured_item} key={item.id}>
                    <Link
                      to={setProductDetailLink(
                        "featured-products",
                        item,
                        "index-item",
                      )}
                    >
                      <img src={item.img} alt="" />
                      <div className={style.item_detail}>
                        <h3>{item.title}</h3>
                        <p>{item.model}</p>
                        <PriceFormat price={item.price} />
                      </div>
                    </Link>
                    <div className={style.button_add_cart}>
                      <Button
                        label="Add to Cart"
                        variant="primary"
                        onClick={() => addToCart(item)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
