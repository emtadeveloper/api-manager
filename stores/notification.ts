"use client";

import { create } from "zustand";

interface Notification {
  message: string;
  isSuccess: boolean;
}

interface NotificationState {
  notification: Notification | null;
  setText: (message?: string) => void;
  setError: (message?: string) => void;
}

const useNotificationStore = create<NotificationState>((set) => ({
  notification: null,

  setText: (message) => {
    if (!message) {
      set({ notification: null });
      return;
    }
    set({ notification: { message, isSuccess: true } });
    setTimeout(() => set({ notification: null }), 3000);
  },

  setError: (message) => {
    if (!message) {
      set({ notification: null });
      return;
    }
    set({ notification: { message, isSuccess: false } });
    setTimeout(() => set({ notification: null }), 3000);
  },
}));

export default useNotificationStore;
