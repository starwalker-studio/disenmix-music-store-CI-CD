import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import type { MenuItem } from "../ts/menu-items";
import style from "./ItemList.module.scss";

type ItemListProps = {
  menuItems: MenuItem[];
};

export const ItemList = ({ menuItems }: ItemListProps) => {
  const location = useLocation();
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleSubmenu = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };
  return (
    <div className={style.simplebar_content}>
      <ul>
        {menuItems.map((item) => {
          const hasChildren = !!item.children?.length;
          const isParentActive = hasChildren
            ? item.children!.some((child) => location.pathname === child.path)
            : false;
          const isOpen = openMenuId === item.id || isParentActive;

          if (item.path === "") {
            return (
              <li key={item.id} className={style.simplebar_list}>
                {item.label}
              </li>
            );
          }

          if (hasChildren) {
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={clsx(
                    style.item,
                    isParentActive && style.item_active,
                  )}
                  onClick={() => toggleSubmenu(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  {item.label}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={clsx(
                      style.chevron,
                      isOpen && style.chevron_open,
                    )}
                  />
                </button>

                <ul
                  className={clsx(style.submenu, isOpen && style.submenu_open)}
                >
                  {item.children!.map((child) => (
                    <li key={child.id}>
                      <NavLink
                        to={child.path}
                        className={({ isActive }) =>
                          clsx(style.subitem, isActive && style.item_active)
                        }
                        end
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          return (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  clsx(style.item, isActive && style.item_active)
                }
                to={item?.path || ""}
                end
              >
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
