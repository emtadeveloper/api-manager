"use client";

import { usePathname } from "next/navigation";

import AppLayout from "@/components/layout/AppLayout";
import AccessGuard from "@/components/guard/AccessGuard";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noLayoutRoutes = ["/login"];

  const isNoLayout = noLayoutRoutes.includes(pathname);

  if (isNoLayout) {
    return (
      <AccessGuard redirectPath="/" requireAuth={false}>
        {children}
      </AccessGuard>
    );
  }

  return (
    <AccessGuard redirectPath="/login" requireAuth={true}>
      <AppLayout>{children}</AppLayout>
    </AccessGuard>
  );
}
