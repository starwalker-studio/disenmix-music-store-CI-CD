import { useLocation } from "react-router-dom";
import { PForm } from "../../../components/form/products/PForm";
import { PageHeader } from "../../../components/ui/PageHeader";
import { EditProductBreadcrumbs } from "../../ts/breadcrumbList";
import style from "../Products.module.scss";

export const EditProduct = () => {
  const location = useLocation();
  const product = location.state;
  console.log(product);
  return (
    <section className={style.product_section}>
      <div className={style.product_wrapper}>
        <div className={style.product_container}>
          <div className={style.product_content}>
            <div className={style.header}>
              <PageHeader style={style} data={EditProductBreadcrumbs} />
            </div>
            <div>
              <PForm mode="edit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
