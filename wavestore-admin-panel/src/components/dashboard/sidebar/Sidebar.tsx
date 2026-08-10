import clsx from "clsx";
import { ItemList } from "./item-list/ItemList";
import style from "./Sidebar.module.scss";
import { menuItems } from "./ts/menu-items";

type SidebarProps = {
  close?: boolean;
};

export const Sidebar = ({ close }: SidebarProps) => {
  return (
    <nav className={clsx(style.desktop_sidebar, close && style.closed)}>
      <div className={style.sidebar_wrapper}>
        <div className={style.sidebar_header}>
          <img src="/logo/wavestore-logo.svg" alt="" />
          <a href="/" className={style.brand_logo}>
            <h3>Administrator Menu</h3>
          </a>
        </div>
        <div className={style.sidebar_content}>
          <div className={style.simplebar_wrapper}>
            <div className={style.simplebar_height}>
              <div className={style.simplebar_auto}></div>
            </div>
            <div className={style.simplebar_mask}>
              <div className={style.simplebar_offset}>
                <div className={style.simplebar_content_wrapper}>
                  <ItemList menuItems={menuItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
