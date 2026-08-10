import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { WavestoreProduct } from "../../api/products/product.interface";
import { useProductStore } from "../../api/store/product.store";
import { TableProducts } from "../../components/table/TableProducts";
import { PageHeader } from "../../components/ui/PageHeader";
import { Pagination } from "../../components/ui/paginator/Pagination";
import { ProductBreadcrumbs } from "../ts/breadcrumbList";
import style from "./Products.module.scss";

export const Products = () => {
  const navigate = useNavigate();
  const { fetchProducts, products, currentPage, lastPage } = useProductStore();
  const onEdit = (product: WavestoreProduct) => {
    navigate("/products/edit", { state: product });
  };
  useEffect(() => {
    fetchProducts({
      page: 1,
    });
  }, []);
  const handlePageChange = (page?: number) => {
    fetchProducts({
      page,
    });
  };
  return (
    <section className={style.product_section}>
      <div className={style.product_wrapper}>
        <div className={style.product_container}>
          <div className={style.product_content}>
            <div className={style.header}>
              <PageHeader style={style} data={ProductBreadcrumbs} />
            </div>
            <div>
              <TableProducts data={products} onEdit={onEdit} />
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
