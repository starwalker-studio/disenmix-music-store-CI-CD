import type { MenuHandlerProps } from "../ts/layout-props"
import { BrandMenu } from "./actions/brands/BrandMenu"
import { InStockMenu } from "./actions/in-stock/InStockMenu"
import { CategoryLinkMenu } from "./actions/links/CategoryLinkMenu"
import { PriceRangeMenu } from "./actions/price-range/PriceRangeMenu"

export const MenuHandler = ({
  brand_list,
  checked,
  sendChecked,
  setMax,
  setMin,
  setInStock,
  inStock,
  price_range,
  PRODUCT_CATEGORY
}: MenuHandlerProps) => {
  return (
    <>
      <BrandMenu
        brand_list={brand_list}
        checked={checked}
        sendChecked={sendChecked}
      />
      <InStockMenu setInStock={setInStock} inStock={inStock} />
      <PriceRangeMenu
        setMax={setMax}
        setMin={setMin}
        price_range={price_range}
      />
      <CategoryLinkMenu
      PRODUCT_CATEGORY={PRODUCT_CATEGORY}
      />
    </>
  )
}
