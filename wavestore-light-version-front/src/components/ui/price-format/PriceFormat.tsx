import style from "./PriceFormat.module.scss";
import { formatPriceParts } from "./ts/format";

type PriceFormatProps = {
  price: string;
};

export const PriceFormat = ({ price }: PriceFormatProps) => {
  return (
    <div className={style.final_row}>
      <strong className={style.amount}>
        <span className={style.currency}>$</span>
        {formatPriceParts(price).map((part, index) => {
          if (part.type === "currency") return null;
          if (part.type === "integer" || part.type === "group") {
            return <span key={index}>{part.value}</span>;
          }
          if (part.type === "decimal" || part.type === "fraction") {
            return (
              <span key={index} className={style.decimal}>
                {part.value}
              </span>
            );
          }
          return null;
        })}
      </strong>
    </div>
  );
};
