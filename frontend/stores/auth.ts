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

const fetchSessionFromAPI = async () => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    const response = await fetch(`${apiBaseUrl.replace(/\/$/, "")}/api/auth/session`, {
      method: "GET",
      cache: "no-store",
      credentials: "include",
    });

    if (!response.ok) {
      return {
        session: null,
        status: "unauthenticated" as const,
      };
    }

    const data = await response.json();

    return {
      session: data.session ?? null,
      status: data.status === "authenticated" ? ("authenticated" as const) : ("unauthenticated" as const),
    };
  } catch (error) {
    console.error("Session fetch error:", error);

    return {
      session: null,
      status: "unauthenticated" as const,
    };
  }
};

export const useSessionStore = create<SessionState>((set) => ({
  session: null,

  status: "loading",

  clearSession: () => {
    set({
      session: null,
      status: "unauthenticated",
    });
  },

  updateSession: async () => {
    set({ status: "loading" });

    const result = await fetchSessionFromAPI();

    set({
      session: result.session,
      status: result.status,
    });
  },
}));
