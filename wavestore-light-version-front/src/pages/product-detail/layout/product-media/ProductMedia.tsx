import { useState } from "react";
import type { WavestoreProductImage } from "../../../../api/products/product.interface";
import style from "./ProductMedia.module.scss";

type ProductMediaProps = {
  gallery: WavestoreProductImage[];
};
export const ProductMedia = ({ gallery }: ProductMediaProps) => {
  const [idSelected, setIdSelected] = useState<number>(gallery.at(0)?.id ?? 0);
  const urlSelected = gallery.find((img) => img.id === idSelected)?.url 
    ?? gallery.at(0)?.url 
    ?? '';
  const setItemSelectedStyle = (
    isSelected: number,
    id: number,
    style: CSSModuleClasses,
  ) => {
    return isSelected !== id ? style.gallery : style.gallery_selected;
  };
  return (
    <>
      <div className={style.product_media}>
        <div className={style.product_image_col}>
          {urlSelected && <img src={urlSelected} alt="" />}
        </div>
        <div className={style.row_items}>
          {gallery.map(({ url, id }) => (
            <div
              className={setItemSelectedStyle(idSelected, id, style)}
              key={id}
              onClick={() => {
                setIdSelected(id);
              }}
            >
              <img src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
