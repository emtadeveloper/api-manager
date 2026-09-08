import { create } from "zustand";

interface ModalState {
  modal: string | null;
  selectedItem: unknown;
  loading: boolean;
  openModal: (modal: string, data?: unknown) => void;
  closeModal: (modalKey: string) => void;
  setLoading: (isLoading: boolean) => void;
}

const useModalStore = create<ModalState>((set, get) => ({
  modal: null,
  selectedItem: null,
  loading: false,

  openModal: (modal, data = null) =>
    set(() => ({
      modal,
      selectedItem: data,
    })),

  closeModal: (modalKey) => {
    const { modal } = get();
    if (modal === modalKey) {
      set(() => ({
        modal: null,
        selectedItem: null,
        loading: false,
      }));
    }
  },

  setLoading: (isLoading) =>
    set(() => ({
      loading: isLoading,
    })),
}));

export default useModalStore;
