"use client";

import { useCallback, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/stores/auth";
import { LoadingScreen } from "@/components/linearLoading/loading-screen";

interface AccessGuardProps {
  requireAuth: boolean;
  redirectPath: string;
  children: React.ReactNode;
}

const AccessGuard = ({ requireAuth, redirectPath, children }: AccessGuardProps) => {
  const session = useSessionStore((state) => state.session);
  const status = useSessionStore((state) => state.status);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const shouldRedirect = requireAuth ? !(session && status === "authenticated") : session && status === "authenticated";

  const handleRedirect = useCallback(() => {
    if (status !== "loading" && shouldRedirect) {
      startTransition(() => router.push(redirectPath));
    }
  }, [status, shouldRedirect, redirectPath, router, startTransition]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect]);

  if (status === "loading" || isPending) return <LoadingScreen />;

  if (shouldRedirect) return null;

  return <>{children}</>;
};

export default AccessGuard;
