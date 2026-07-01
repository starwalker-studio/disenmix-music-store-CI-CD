import {
    faHeadphones,
    faShield,
    faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./IconRow.module.scss";

export const IconRow = () => {
  return (
    <>
      <div className={style.service_icons}>
        <div className={style.service_icons_items}>
          <div className={style.item}>
            <span>
              <FontAwesomeIcon icon={faTruckFast} size="1x" />
            </span>
            <p>
              <strong>Fast</strong>
              <br />
              Shipping
            </p>
          </div>
          <div className={style.item}>
            <span>
              <FontAwesomeIcon icon={faHeadphones} size="1x" />
            </span>
            <p>
              <strong>FREE</strong>
              <br />
              Support
            </p>
          </div>
          <div className={style.item}>
            <span>
              <FontAwesomeIcon icon={faShield} size="1x" />
            </span>
            <p>
              <strong>FREE</strong> 2-year
              <br />
              Warranty
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
