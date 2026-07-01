import { useMenu } from "../../../../../../hooks/useMenu";
import type { BrandMenuProps } from "../../../ts/layout-props";
import style from "./BrandMenu.module.scss";

export const BrandMenu = ({
  brand_list,
  checked,
  sendChecked,
}: BrandMenuProps) => {
  const { handleToggle } = useMenu();
  return (
    <>
      <div className={style.brands_section}>
        <div className={style.section_title}>
          <h4>Brand</h4>
        </div>
        <div className={style.brand_list}>
          {brand_list.map(({ id, brand }) => (
            <ul className={style.catalog_brand} key={id}>
              <li className={style.product_brand}>
                <label className={style.checkbox_container}>
                  <input
                    type="checkbox"
                    checked={checked.indexOf(id) === -1 ? false : true}
                    onChange={() => {
                      sendChecked(handleToggle(id, checked));
                    }}
                  />
                  {brand}
                </label>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
