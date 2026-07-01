import { useState } from "react";
import type { WavestoreProduct } from "../api/products/product.interface";

export const useMenu = () => {
  const [checked, setChecked] = useState<number[]>([]);
  const handleToggle = (value: number, checked: number[]): number[] =>
    checked.includes(value)
      ? checked.filter((v) => v !== value)
      : [...checked, value];
  
  const setProductDetailLink = (
    category: string,
    item: WavestoreProduct,
    product: string,
  ) => {
    return `/shop/detail/${product}/${category}/${item.item_ID}`;
  };

  return {
    checked,
    handleToggle,
    setChecked,
    setProductDetailLink,
  };
};
