// store/cartStore.ts
import { create } from "zustand";
import type { CartStore } from "./store.interface";

const DEMO_USER_ID = 1;

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (product) => {
    const items = get().items;
    const exists = items.find((item) => item.item_ID === product.item_ID);

    if (exists) {
      set({
        items: items.map((item) =>
          item.item_ID === product.item_ID
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      set({
        items: [
          ...items,
          {
            id_user: DEMO_USER_ID,
            item_ID: product.item_ID,
            model: product.model,
            img: product.img ?? "",
            price: product.price,
            quantity: 1,
          },
        ],
      });
    }
  },

  removeFromCart: (item_ID) => {
    set({
      items: get().items.filter((item) => item.item_ID !== item_ID),
    });
  },

  updateQuantity: (item_ID, quantity) => {
    if (quantity < 1) return;
    set({
      items: get().items.map((item) =>
        item.item_ID === item_ID ? { ...item, quantity } : item,
      ),
    });
  },

  clearCart: () => set({ items: [] }),

  getTotal: () => {
    return get().items.reduce((acc, item) => {
      return acc + parseFloat(item.price) * item.quantity;
    }, 0);
  },

  getTotalItems: () => {
    return get().items.reduce((acc, item) => acc + item.quantity, 0);
  },
}));
