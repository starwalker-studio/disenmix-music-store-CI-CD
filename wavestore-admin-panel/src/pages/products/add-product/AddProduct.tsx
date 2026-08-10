import { PForm } from "../../../components/form/products/PForm";
import { PageHeader } from "../../../components/ui/PageHeader";
import { AddProductBreadcrumbs } from "../../ts/breadcrumbList";
import style from "../Products.module.scss";

export const AddProduct = () => {
  return (
    <section className={style.product_section}>
      <div className={style.product_wrapper}>
        <div className={style.product_container}>
          <div className={style.product_content}>
            <div className={style.header}>
              <PageHeader style={style} data={AddProductBreadcrumbs} />
            </div>
            <div>
              <PForm mode="add" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
