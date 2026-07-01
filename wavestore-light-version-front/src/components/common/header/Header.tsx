import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { HEADER_ENV } from "../../../env/header.env";
import { useMobileScreen } from "../../../hooks/useMobileScreen";
import { Button } from "../../ui/button/Button";
import style from "./Header.module.scss";
import { MenuItems } from "./elements/menu-items/MenuItems";
import { SearchBar } from "./elements/search-bar/SearchBar";

export const Header = () => {
  const { isMobileScreen, handleClick, nav_transition } = useMobileScreen();
  return (
    <>
      <section className={style.site_header}>
        <div className={style.header_container}>
          <div className={style.header_wrapper}>
            <header className={style.header_menu}>
              <div className={style.menu_logo}>
                <NavLink to={"/"}>
                  <img src={HEADER_ENV.LOGO} alt="" />
                </NavLink>
              </div>
              {isMobileScreen() ? (
                <>
                  <div className={style.mobile_icon}>
                    <span onClick={() => handleClick()}>
                      <FontAwesomeIcon icon={faBars} />
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <SearchBar />
                  <MenuItems />
                </>
              )}
            </header>
          </div>
        </div>
      </section>
      {isMobileScreen() && (
        <div className={style.nav_overlay}>
          <nav className={style.nav_mobile} style={nav_transition}>
            <div className={style.nav_mobile_container}>
              <div className={style.display_pages}>
                <SearchBar />
                <ul>
                  <li>{`(800) 224-4781 Contact Us`}</li>
                  <li>{`Account`}</li>
                  <li>{`Cart`}</li>
                  <div className={style.button_wrapper_mobile}>
                    <Button
                      onClick={() => handleClick()}
                      label="Close Menu"
                      variant="primary"
                    />
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
