"use client";

import { useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

import { useSessionStore } from "@/stores/auth";

import { LoadingScreen } from "@/components/linearLoading/loading-screen";

interface AccessGuardProps {
  requireAuth: boolean;
  redirectPath: string;
  children: React.ReactNode;
}

const AccessGuard = ({ requireAuth, redirectPath, children }: AccessGuardProps) => {
  const router = useRouter();

  const session = useSessionStore((state) => state.session);

  const status = useSessionStore((state) => state.status);

  const updateSession = useSessionStore((state) => state.updateSession);

  const redirectingRef = useRef(false);

  // فقط یک بار Session را از Backend بگیر
  useEffect(() => {
    if (status === "loading") {
      updateSession();
    }
  }, [status, updateSession]);

  const isAuthenticated = status === "authenticated" && !!session;

  const shouldRedirect = requireAuth ? !isAuthenticated : isAuthenticated;

  useEffect(() => {
    if (status === "loading" || !shouldRedirect || redirectingRef.current) {
      return;
    }

    redirectingRef.current = true;

    router.replace(redirectPath);
  }, [status, shouldRedirect, redirectPath, router]);

  /*
   * تا زمانی که Session مشخص نشده
   */
  if (status === "loading") {
    return <LoadingScreen />;
  }

  if (shouldRedirect) {
    return null;
  }

  return <>{children}</>;
};

export default AccessGuard;
