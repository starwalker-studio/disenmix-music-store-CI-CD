export interface IBreadcrumbList {
  breadcrumbs: {
    page_header: string;
    nav_list: { id: number; label: string; url?: string }[];
  };
}

export const ProductBreadcrumbs: IBreadcrumbList = {
  breadcrumbs: {
    page_header: "Products",
    nav_list: [
      { id: 1, label: "Home", url: "/" },
      { id: 2, label: "Wavestore Products" },
    ],
  },
};

export const AddProductBreadcrumbs: IBreadcrumbList = {
  breadcrumbs: {
    page_header: "New Product",
    nav_list: [
      { id: 1, label: "Home", url: "/" },
      { id: 2, label: "Wavestore Products", url: "/products" },
      { id: 3, label: "Add Product", url: "/products/add" },
    ],
  },
};

export const EditProductBreadcrumbs: IBreadcrumbList = {
  breadcrumbs: {
    page_header: "Edit Product",
    nav_list: [
      { id: 1, label: "Home", url: "/" },
      { id: 2, label: "Wavestore Products", url: "/products" },
      { id: 3, label: "Edit", url: "/products/edit" },
    ],
  },
};

export const ViewProductBreadcrumbs: IBreadcrumbList = {
  breadcrumbs: {
    page_header: "View Product",
    nav_list: [
      { id: 1, label: "Home", url: "/" },
      { id: 2, label: "Wavestore Products", url: "/products" },
      { id: 3, label: "View", url: "/products/view-product" },
    ],
  },
};

export const ClientBreadcrumbs: IBreadcrumbList = {
  breadcrumbs: {
    page_header: "Clients",
    nav_list: [
      { id: 1, label: "Home", url: "/" },
      { id: 2, label: "Clients" },
    ],
  },
};
