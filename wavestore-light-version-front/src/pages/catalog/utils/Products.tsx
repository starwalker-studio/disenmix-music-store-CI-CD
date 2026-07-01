import { useMobileScreen } from "../../../hooks/useMobileScreen";
import { LocationSection } from "../../home/components/location/LocationSection";
import { DisplayProducts } from "../layout/display-products/DisplayProducts";
import { MenuHandler } from "../layout/menu-handler/MenuHandler";
import { Menu } from "../layout/menu/Menu";
import { MobileDisplayProducts } from "../mobile/mobile-display-products/MobileDisplayProducts";
import type { ProductsProps } from "./ts/utils-props";

export const Products = ({
  brands,
  categories,
  checked,
  currentPage,
  handlePageChange,
  inStock,
  lastPage,
  price_range,
  products,
  title,
  setChecked,
  setInStock,
  setMayor,
  setMinor,
  total,
  loadingBrands,
  loadingPriceRange,
  loadingProducts,
}: ProductsProps) => {
  const { isMobileScreen } = useMobileScreen();
  return (
    <>
      {isMobileScreen() ? (
        <MobileDisplayProducts
          products={products}
          total={total}
          title={title}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          lastPage={lastPage}
          brand_list={brands}
          checked={checked}
          sendChecked={(e: number[]) => setChecked(e)}
          price_range={price_range}
          setMax={(e: number) => setMayor(e)}
          setMin={(e: number) => setMinor(e)}
          setInStock={(e: boolean) => setInStock(e)}
          inStock={inStock}
          product={"wavestore-product"}
          category={"0033521"}
          loadingProducts={loadingProducts}
          loadingBrands={loadingBrands}
          loadingPriceRange={loadingPriceRange}
          PRODUCT_CATEGORY={categories}
        />
      ) : (
        <>
          <Menu
            MenuHandler={
              <MenuHandler
                brand_list={brands}
                checked={checked}
                sendChecked={(e: number[]) => setChecked(e)}
                setMax={(e: number) => setMayor(e)}
                setMin={(e: number) => setMinor(e)}
                setInStock={(e: boolean) => setInStock(e)}
                inStock={inStock}
                price_range={price_range}
                PRODUCT_CATEGORY={categories}
              />
            }
            title={title}
            loadingBrands={loadingBrands}
            loadingPriceRange={loadingPriceRange}
          >
            <DisplayProducts
              list={products}
              lastPage={lastPage}
              currentPage={currentPage}
              totalProducts={total}
              product={"wavestore-product"}
              category={"00558"}
              onPageChange={handlePageChange}
              loadingProducts={loadingProducts}
            />
          </Menu>
          <LocationSection />
        </>
      )}
    </>
  );
};
