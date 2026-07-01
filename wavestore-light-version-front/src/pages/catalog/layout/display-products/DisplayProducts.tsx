import { Spinner } from "../../../../components/ui/spinner/Spinner";
import type { DisplayProductsProps } from "../ts/layout-props";
import style from "./DisplayProducts.module.scss";
import { Paginator } from "./paginator/Paginator";
import { ProductCard } from "./product-card/ProductCard";

export const DisplayProducts = ({
  list,
  lastPage,
  currentPage,
  totalProducts,
  onPageChange,
  category,
  product,
  loadingProducts,
}: DisplayProductsProps) => {
  const goToPage = (page: number) => {
    if (page < 1 || page > lastPage) return;
    onPageChange(page);
  };
  return (
    <>
      <div className={style.products}>
        <div className={style.top}>
          <div className={style.total_products}>
            <p>{`${totalProducts} Products`}</p>
          </div>
        </div>
        {loadingProducts ? (
          <div className={style.loading_spinner}>
            <Spinner />
          </div>
        ) : (
          <>
          <div className={style.grid_products}>
            <ProductCard list={list} category={category} product={product} />
          </div>
            <div className={style.bottom}>
              <Paginator
                goToPage={goToPage}
                currentPage={currentPage}
                lastPage={lastPage}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
