import { FilterSearch } from "../../components/filter-search/FilterSearch";
import { TableProducts } from "../../components/table/TableProducts";
import { PageHeader } from "../../components/ui/PageHeader";
import { Pagination } from "../../components/ui/paginator/Pagination";
import { Spinner } from "../../components/ui/spinner/Spinner";
import { ProductBreadcrumbs } from "../ts/breadcrumbList";
import { useProductSearch } from "../ts/product-search";
import style from "./Products.module.scss";

export const Products = () => {
  const {
    categories,
    handleChange,
    handlePageChange,
    currentPage,
    lastPage,
    onEdit,
    onView,
    handleInStockChange,
    productSearch,
    products,
    brands,
    loadingProducts,
    isSearchActive,
    EMPTY_PRODUCT_SEARCH,
    setProductSearch,
  } = useProductSearch();
  return (
    <section className={style.product_section}>
      <div className={style.product_wrapper}>
        <div className={style.product_container}>
          <div className={style.product_content}>
            <div className={style.header}>
              <PageHeader style={style} data={ProductBreadcrumbs} />
            </div>
            <div>
              <FilterSearch
                brands={brands}
                categories={categories}
                handleChange={handleChange}
                handleInStockChange={handleInStockChange}
                productSearch={productSearch}
                style={style}
                EMPTY_PRODUCT_SEARCH={EMPTY_PRODUCT_SEARCH}
                isSearchActive={isSearchActive}
                setProductSearch={setProductSearch}
              />
              {loadingProducts ? (
                <Spinner />
              ) : (
                <TableProducts
                  data={products}
                  onEdit={onEdit}
                  onView={onView}
                />
              )}
              <Pagination
                currentPage={currentPage}
                totalPages={lastPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
