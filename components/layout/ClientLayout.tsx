"use client";

import { usePathname } from "next/navigation";

import AppLayout from "@/components/layout/AppLayout";
import AccessGuard from "@/components/guard/AccessGuard";
import AppProviders from "@/providers/AppProviders";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noLayoutRoutes = ["/login"];
  const isNoLayout = noLayoutRoutes.includes(pathname);

  return (
    <AppProviders>
      {isNoLayout ? (
        <AccessGuard redirectPath="/" requireAuth={false}>
          {children}
        </AccessGuard>
      ) : (
        <AccessGuard redirectPath="/login" requireAuth={true}>
          <AppLayout>{children}</AppLayout>
        </AccessGuard>
      )}
    </AppProviders>
  );
}
