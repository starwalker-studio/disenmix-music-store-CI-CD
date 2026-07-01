import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { BrandMenu } from "../../layout/menu-handler/actions/brands/BrandMenu";
import { InStockMenu } from "../../layout/menu-handler/actions/in-stock/InStockMenu";
import { PriceRangeMenu } from "../../layout/menu-handler/actions/price-range/PriceRangeMenu";
import type { FilterDrawerProps } from "../../utils/ts/mobile-props";
import style from "./MobileFilterMenu.module.scss";

export const MobileFilterMenu = ({
  isOpen,
  onClose,
  brand_list,
  checked,
  sendChecked,
  price_range,
  setMax,
  setMin,
  setInStock,
  inStock,
}: FilterDrawerProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 360);
  };

  if (!isOpen && !isClosing) return null;
  if (!isOpen) return null;
  return (
    <>
      <div className={style.overlay} onClick={handleClose} />
      <div
        className={`${style.drawer} ${isClosing ? style.drawer_closing : ""}`}
      >
        <div className={style.drawer_handle} />
        <div className={style.drawer_header}>
          <h3>Filters</h3>
          <button className={style.close_btn} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className={style.drawer_body}>
          <div className={style.filters}>
            <PriceRangeMenu
              price_range={price_range}
              setMax={setMax}
              setMin={setMin}
            />
            <InStockMenu setInStock={setInStock} inStock={inStock} />
            <BrandMenu
              brand_list={brand_list}
              checked={checked}
              sendChecked={sendChecked}
            />
          </div>
        </div>
        <div className={style.drawer_footer}>
          <button className={style.btn_apply} onClick={handleClose}>
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};
