import { faArrowLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ENV } from "../../../api/config/env";
import type { WavestoreProduct } from "../../../api/products/product.interface";
import { useProductStore } from "../../../api/store/product.store";
import { PageHeader } from "../../../components/ui/PageHeader";
import { ViewProductBreadcrumbs } from "../../ts/breadcrumbList";
import style from "./ViewProduct.module.scss";

export const ViewProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state as WavestoreProduct | undefined;
  const { fetchProductGallery, productGallery } = useProductStore();

  useEffect(() => {
    fetchProductGallery(product?.item_ID ? product?.item_ID : "");
  }, [product]);

  if (!product) {
    return (
      <div className={style.empty_state}>
        <p>No product selected.</p>
        <button
          onClick={() => navigate("/products")}
          className={style.button_secondary}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to products
        </button>
      </div>
    );
  }

  return (
    <section className={style.product_section}>
      <div className={style.product_wrapper}>
        <div className={style.product_container}>
          <div className={style.product_content}>
            <div className={style.header}>
              <PageHeader style={style} data={ViewProductBreadcrumbs} />
            </div>
            <div className={style.card}>
              <div className={style.item_header}>
                <h2>{product?.model}</h2>
                <span
                  className={`${style.status} ${product?.in_stock ? style.status_active : style.status_inactive}`}
                >
                  {product?.in_stock ? "In Stock" : "Not In Stock"}
                </span>
              </div>

              <div className={style.content}>
                <div className={style.image_column}>
                  <img
                    src={`${ENV.PUBLIC_BASE_URL}${product?.img}`}
                    alt={product?.model}
                    className={style.main_image}
                  />
                </div>

                <div className={style.details_column}>
                  <div className={style.detail_row}>
                    <span className={style.label}>Item ID</span>
                    <span className={style.value}>{product?.item_ID}</span>
                  </div>
                  <div className={style.detail_row}>
                    <span className={style.label}>Category</span>
                    <span className={style.value}>
                      {product?.category?.name ?? "—"}
                    </span>
                  </div>
                  <div className={style.detail_row}>
                    <span className={style.label}>Brand</span>
                    <span className={style.value}>
                      {product?.brand?.brand ?? "—"}
                    </span>
                  </div>
                  <div className={style.detail_row}>
                    <span className={style.label}>Price</span>
                    <span className={style.value}>${product?.price}</span>
                  </div>
                  <div className={style.detail_row}>
                    <span className={style.label}>Description</span>
                    <span className={style.value}>{product?.description}</span>
                  </div>
                  <div className={style.detail_row}>
                    <span className={style.label}>Product Info</span>
                    <span className={style.value}>{product?.product_info}</span>
                  </div>
                </div>
              </div>
              
              <div className={style.gallery_section}>
                <h3>Gallery</h3>
                <div className={style.gallery_grid}>
                  {productGallery.map((item) => (
                    <div key={item.id}>
                      <img src={`${ENV.PUBLIC_BASE_URL}${item.url}`} alt="" />
                    </div>
                  ))}
                </div>
              </div>

              <div className={style.footer_actions}>
                <button
                  onClick={() => navigate("/products")}
                  className={style.button_secondary}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back to products
                </button>
                <button
                  onClick={() => navigate("/products/edit", { state: product })}
                  className={style.button_primary}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                  Edit product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
