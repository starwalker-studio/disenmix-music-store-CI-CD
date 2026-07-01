import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../api/store/product.store";
import { Spinner } from "../../components/ui/spinner/Spinner";
import { ProductMedia } from "./layout/product-media/ProductMedia";
import { ProductPricing } from "./layout/product-pricing/ProductPricing";
import style from "./ProductDetail.module.scss";

export const ProductDetail = () => {
  const { itemID } = useParams();
  const {
    fetchProductGallery,
    fetchProductDetail,
    clearGallery,
    clearDetail,
    productDetail,
    productGallery,
    loadingProductGallery,
    loadingProductDetail,
  } = useProductStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    clearDetail();
    clearGallery();
    if (itemID) fetchProductDetail(itemID);
    if (itemID) fetchProductGallery(itemID);
  }, [itemID]);
  return (
    <section className={style.product_section}>
      <div className={style.product_container}>
        <div className={style.product_wrapper}>
          {loadingProductDetail ? (
            <div className={style.loading_prod_spinner}>
              <Spinner />
            </div>
          ) : (
            <>
              {!loadingProductGallery && productDetail && (
                <div className={style.product_summary}>
                  <header className={style.product_header_container}>
                    <div className={style.product_header}>
                      <h1>{productDetail.model}</h1>
                      <div className={style.product_desc}>
                        {productDetail.description}
                      </div>
                      <div className={style.product_meta}>
                        <strong>Item ID: {productDetail.item_ID}</strong>
                      </div>
                    </div>
                  </header>
                  <div className={style.product_grid}>
                    {productGallery && (
                      <ProductMedia gallery={productGallery} />
                    )}
                    {productDetail.price && (
                      <ProductPricing
                        price={productDetail.price}
                        item={productDetail}
                      />
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
