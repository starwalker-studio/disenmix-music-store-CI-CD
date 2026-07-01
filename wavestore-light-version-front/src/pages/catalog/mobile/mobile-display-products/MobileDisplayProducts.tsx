import { faCheck, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../../api/store/cart.store";
import { Button } from "../../../../components/ui/button/Button";
import { PriceFormat } from "../../../../components/ui/price-format/PriceFormat";
import { Spinner } from "../../../../components/ui/spinner/Spinner";
import { useMenu } from "../../../../hooks/useMenu";
import { LocationSection } from "../../../home/components/location/LocationSection";
import { Paginator } from "../../layout/display-products/paginator/Paginator";
import { CategoryLinkMenu } from "../../layout/menu-handler/actions/links/CategoryLinkMenu";
import type { MobileDisplayProductsProps } from "../../utils/ts/mobile-props";
import { MobileFilterMenu } from "../mobile-filter-menu/MobileFilterMenu";
import style from "./MobileDisplayProducts.module.scss";

export const MobileDisplayProducts = ({
  products,
  total,
  title,
  onPageChange,
  lastPage,
  currentPage,
  brand_list,
  checked,
  sendChecked,
  price_range,
  setMax,
  setMin,
  setInStock,
  inStock,
  category,
  product,
  loadingProducts,
  loadingBrands,
  loadingPriceRange,
  PRODUCT_CATEGORY,
}: MobileDisplayProductsProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { setProductDetailLink } = useMenu();
  const { addToCart } = useCartStore();
  const goToPage = (page: number) => {
    if (page < 1 || page > lastPage) return;
    onPageChange(page);
  };
  return (
    <div className={style.mdp_wrapper}>
      <div className={style.mdp_container}>
        <div className={style.mdp_flex_column}>
          <div className={style.product_title}>
            <h1>{title}</h1>
          </div>
          <div className={style.product_header}>
            <div className={style.filter} onClick={() => setIsFilterOpen(true)}>
              <span>
                <FontAwesomeIcon icon={faSliders} />
              </span>
              <p>Filters</p>
            </div>
            <div className={style.total_products}>
              <span>{`${total} products`}</span>
            </div>
          </div>
          {loadingProducts ? (
            <div className={style.loading_prod_mobile_spinner}>
              <Spinner />
            </div>
          ) : (
            <>
              {products.map((item) => (
                <div className={style.product_card} key={item.id}>
                  <Link to={setProductDetailLink(category, item, product)}>
                    <div className={style.product_img}>
                      <img src={`${item?.img}`} alt="" />
                    </div>
                  </Link>
                  <div className={style.product_info}>
                    <Link to={setProductDetailLink(category, item, product)}>
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
                          <strong className={style.avail_not_stock}>
                            Not In Stock!
                          </strong>
                        </div>
                      )}
                      <h3>{item.model}</h3>
                      <PriceFormat price={item.price} />
                    </Link>
                    <div className={style.button_add_cart}>
                      <Button
                        label="Add to Cart"
                        onClick={() => addToCart(item)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          <div className={style.paginator}>
            <Paginator
              goToPage={goToPage}
              currentPage={currentPage}
              lastPage={lastPage}
            />
          </div>
        </div>
        <br />
        <div className={style.category_link}>
          <CategoryLinkMenu PRODUCT_CATEGORY={PRODUCT_CATEGORY} />
        </div>
        <LocationSection />
      </div>
      {loadingBrands && loadingPriceRange ? (
        <div className={style.loading_prod_mobile_spinner}>
          <Spinner />
        </div>
      ) : (
        <>
          <MobileFilterMenu
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            brand_list={brand_list}
            checked={checked}
            sendChecked={sendChecked}
            price_range={price_range}
            setMax={setMax}
            setMin={setMin}
            setInStock={setInStock}
            inStock={inStock}
          />
        </>
      )}
    </div>
  );
};
