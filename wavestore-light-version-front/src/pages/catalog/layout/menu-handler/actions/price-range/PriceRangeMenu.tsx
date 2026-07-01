import { useState } from "react";
import type { PriceRangeMenuProps } from "../../../ts/layout-props";
import style from "./PriceRangeMenu.module.scss";

export const PriceRangeMenu = ({
  setMax,
  setMin,
  price_range,
}: PriceRangeMenuProps) => {
  const [range, setRange] = useState(price_range.max_price);

  const handleReset = () => {
    setMin(0);
    setMax(0);
    setRange(0);
  };

  const sendRangeToRequest = () => {
    setMin(price_range.min_price);
    setMax(range);
  };
  return (
    <>
      <div className={style.price_range_section}>
        <div className={style.section_title}>
          <h4>Price Range</h4>
        </div>
        <div className={style.price_range}>
          <div>
            <p>${price_range.min_price}</p>
          </div>
          <div>
            <p>${range}</p>
          </div>
        </div>
        <div className={style.input_range}>
          <input
            min={price_range.min_price}
            max={price_range.max_price}
            step={100}
            type="range"
            onChange={(e) => setRange(Number(e.target.value))}
            value={range}
          />
        </div>
      </div>
      <div className={style.price_range_buttons}>
        <button
          onClick={() => {
            handleReset();
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            sendRangeToRequest();
          }}
        >
          set
        </button>
      </div>
    </>
  );
};
