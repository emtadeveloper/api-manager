import { create } from "zustand";

interface MenuState {
  openMenuId: string | null;
  openMenu: (menuId: string) => void;
  closeMenu: (menuId?: string) => void;
  toggleMenu: (menuId: string) => void;
}

const useMenuStore = create<MenuState>((set, get) => ({
  openMenuId: null,

  openMenu: (menuId) =>
    set(() => ({
      openMenuId: menuId,
    })),

  closeMenu: (menuId) => {
    const { openMenuId } = get();
    if (menuId === undefined || openMenuId === menuId) {
      set(() => ({
        openMenuId: null,
      }));
    }
  },

  toggleMenu: (menuId) => {
    const { openMenuId } = get();
    set(() => ({
      openMenuId: openMenuId === menuId ? null : menuId,
    }));
  },
}));

export default useMenuStore;
