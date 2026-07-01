import type { InStockMenuProps } from "../../../ts/layout-props";
import style from "./InStockMenu.module.scss";

export const InStockMenu = ({ setInStock, inStock }: InStockMenuProps) => {
  return (
    <>
      <div className={style.in_stock}>
        <div className={style.section_title}>
          <h4>Availability</h4>
        </div>
        <div className={style.in_stock_contianer}>
          <label className={style.in_stock_checkbox}>
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />
            In Stock
          </label>
        </div>
      </div>
    </>
  );
};
