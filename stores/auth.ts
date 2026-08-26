import { create } from "zustand";

interface Session {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
}

interface SessionState {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
  clearSession: () => void;
  updateSession: () => Promise<void>;
}

const fetchSessionFromAPI = async (): Promise<{
  session: Session | null;
  status: "authenticated" | "unauthenticated";
}> => {
  try {
    const response = await fetch("/api/auth/session");

    if (response.ok) {
      const data = (await response.json()) as Session;
      return data ? { session: data, status: "authenticated" } : { session: null, status: "unauthenticated" };
    }

    return { session: null, status: "unauthenticated" };
  } catch {
    return { session: null, status: "unauthenticated" };
  }
};

export const useSessionStore = create<SessionState>((set) => ({
  session: null,
  status: "loading",
  clearSession: () =>
    set({
      session: null,
      status: "unauthenticated",
    }),
  updateSession: async () => {
    const { session, status } = await fetchSessionFromAPI();
    set({ session, status });
  },
}));

if (typeof window !== "undefined") {
  useSessionStore.getState().updateSession();
}
