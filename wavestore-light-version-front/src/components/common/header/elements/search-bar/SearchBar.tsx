import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <>
      <div className={style.menu_search_wrap}>
        <div className={style.autocomplete}>
          <form className={style.search_form}>
            <div className={style.icon_wrapper}>
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <div className={style.input_wrapper}>
              <input type="text" placeholder="search on wavestore" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
