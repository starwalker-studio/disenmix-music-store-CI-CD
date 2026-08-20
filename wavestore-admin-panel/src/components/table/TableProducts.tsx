import { faBan, faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ENV } from "../../api/config/env";
import type { WavestoreProduct } from "../../api/products/product.interface";
import style from "./Table.module.scss";
import {
  formatDateShort,
  formatDateToNow,
  formatPriceParts,
  truncate,
} from "./ts/format";

type TableProps = {
  data: WavestoreProduct[];
  onEdit: (item: WavestoreProduct) => void;
  onView: (item: WavestoreProduct) => void;
  onDeactivate: (item: WavestoreProduct) => void;
};

export const TableProducts = ({ data, onEdit, onView, onDeactivate }: TableProps) => {
  return (
    <div className={style.table_card}>
      <div className={style.table_wrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>item</th>
              <th>item ID</th>
              <th>Model</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Updated At</th>
              <th>Created At</th>
              <th>In Stock</th>
              <th>options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className={style.item_img}>
                  <img src={`${ENV.PUBLIC_BASE_URL}${item.img}`} alt="" />
                </td>
                <td>{item.item_ID}</td>
                <td title={item.model}>{truncate(item.model)}</td>
                <td>{item.brand?.brand}</td>
                <td>{item.category?.name}</td>
                <td>{formatPriceParts(item.price)}</td>
                <td>{item.updated_at && formatDateToNow(item.updated_at)}</td>
                <td>{item.created_at && formatDateShort(item.created_at)}</td>
                <td>
                  <span
                    className={clsx(
                      style.status,
                      item.in_stock
                        ? style.status_active
                        : style.status_inactive,
                    )}
                  >
                    {item.in_stock ? "In Stock" : "Not In Stock"}
                  </span>
                </td>
                <td>
                  <div className={style.actions_cell}>
                    <button
                      onClick={() => onView(item)}
                      className={clsx(style.action_button, style.action_view)}
                      title="View"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>

                    <button
                      onClick={() => onEdit(item)}
                      className={clsx(style.action_button, style.action_edit)}
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>

                    <button
                      onClick={() => onDeactivate(item)}
                      className={clsx(
                        style.action_button,
                        style.action_deactivate,
                      )}
                      title="Deactivate"
                    >
                      <FontAwesomeIcon icon={faBan} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
