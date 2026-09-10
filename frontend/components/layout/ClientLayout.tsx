"use client";

import { usePathname } from "next/navigation";

import AppLayout from "@/components/layout/AppLayout";
import AccessGuard from "@/components/guard/AccessGuard";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Initialization is an authenticated settings page and must use the app layout.
  const noLayoutRoutes = ["/login"];
  const isNoLayout = noLayoutRoutes.includes(pathname);

  return isNoLayout ? (
      <AccessGuard redirectPath="/rest-services" requireAuth={false}>
        {children}
      </AccessGuard>
    ) : (
      <AccessGuard redirectPath="/login" requireAuth={true}>
        <AppLayout>{children}</AppLayout>
      </AccessGuard>
    );
}
