import {
  faBriefcase,
  faGauge,
  faLock,
  faStore,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export type MenuItem = {
  id: number;
  path?: string;
  label: string;
  icon: IconDefinition;
  children?: SubMenuItem[];
};

export interface SubMenuItem {
  id: number;
  path: string;
  label: string;
}

export type ClassValue = string | false | null | undefined;

export const menuItems: MenuItem[] = [
  { id: 1, path: "/", label: "Dashboard", icon: faGauge },
  {
    id: 2,
    label: "Store",
    icon: faStore,
    children: [
      { id: 1, path: "/products", label: "Products" },
      { id: 2, path: "/products/add", label: "Add Product" }
    ],
  },
  { id: 3, path: "/clients", label: "Clients", icon: faBriefcase },
  { id: 4, path: "/login", label: "Login", icon: faLock },
];
