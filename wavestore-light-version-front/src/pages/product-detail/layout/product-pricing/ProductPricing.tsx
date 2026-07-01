import type { WavestoreProduct } from "../../../../api/products/product.interface";
import { PriceFormat } from "../../../../components/ui/price-format/PriceFormat";
import { ActionButtons } from "../action-buttons/ActionButtons";
import { IconRow } from "../icon-row/IconRow";
import style from "./ProductPricing.module.scss";

type ProductPricingProps = {
  price: string;
  item: WavestoreProduct;
};

export const ProductPricing = ({ price, item }: ProductPricingProps) => {
  return (
    <>
      <section className={style.product_options}>
        <div className={style.product_pricing_top_level}>
          <div className={style.product_pricing}>
            <em className={style.price}>
              <PriceFormat price={price} />
            </em>
          </div>
        </div>
        <div>
          <ActionButtons item={item} />
          <IconRow />
          <div className={style.product_info}>
            <h3>About this Item</h3>
            <p>{item.product_info}</p>
          </div>
        </div>
      </section>
    </>
  );
};
