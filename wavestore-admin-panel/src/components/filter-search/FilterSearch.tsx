import type {
  Brands,
  WavestoreCategory,
} from "../../api/products/product.interface";
import type { ProductSearch } from "../form/products/ts/form-product.interface";

type FilterSearchProps = {
  style: CSSModuleClasses;
  productSearch: ProductSearch;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
      Element
    >,
  ) => void;
  categories: WavestoreCategory[];
  brands: Brands[];
  handleInStockChange: (checked: boolean) => void;
  isSearchActive: (search: ProductSearch) => boolean;
  setProductSearch: (search: ProductSearch) => void;
  EMPTY_PRODUCT_SEARCH: ProductSearch;
};

export const FilterSearch = ({
  style,
  productSearch,
  handleChange,
  categories,
  brands,
  handleInStockChange,
  isSearchActive,
  setProductSearch,
  EMPTY_PRODUCT_SEARCH,
}: FilterSearchProps) => {
  return (
    <div className={style.filter_search}>
      <div className={style.filter_search_header}>
        <h3>Filter Search</h3>
        {isSearchActive(productSearch) && (
          <button onClick={() => setProductSearch(EMPTY_PRODUCT_SEARCH)}>
            clear search
          </button>
        )}
      </div>
      <div className={style.inputs_grid}>
        <div>
          <div className={style.field}>
            <label htmlFor="item_ID">Item ID</label>
            <input
              type="text"
              id="item_ID"
              name="item_ID"
              value={productSearch?.item_ID ?? ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.category_brand_row}>
          <div className={style.field}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="id_category"
              value={productSearch?.id_category}
              onChange={handleChange}
            >
              <option value={0} disabled>
                Select category
              </option>
              {categories &&
                categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className={style.field}>
            <label htmlFor="brand">Brand</label>
            <select
              id="brand"
              name="id_brand"
              value={productSearch?.id_brand}
              onChange={handleChange}
            >
              <option value={0} disabled>
                Select brand
              </option>
              {brands &&
                brands.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.brand}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className={style.in_stock_row}>
          <div className={style.checkbox_field}>
            <input
              type="checkbox"
              id="in_stock"
              name="in_stock"
              checked={productSearch.in_stock}
              onChange={(e) => handleInStockChange(e.target.checked)}
            />
            <label htmlFor="in_stock">Available in stock</label>
          </div>
        </div>
      </div>
    </div>
  );
};
