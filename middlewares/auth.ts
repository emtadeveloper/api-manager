import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decryptSession } from "@/utils/session";

interface DecryptedSession {
  exp: number;
  accessToken: string;
}

export async function authMiddleware(request: NextRequest): Promise<NextResponse> {
  const session = request.cookies.get("clb-session")?.value;

  const authRoutes: string[] = ["/login"];
  const protectedRoutes: string[] = ["/"];

  const signinRoute = request.nextUrl.clone();
  const { nextUrl } = request;
  const nextResponse = NextResponse.next();

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProtectedRoute = protectedRoutes.some((route) => nextUrl.pathname.startsWith(route));

  if (!session) {
    if (isProtectedRoute) {
      const callbackUrl = encodeURIComponent(nextUrl.pathname);
      signinRoute.pathname = "/login";
      return NextResponse.redirect(`${signinRoute}?callbackUrl=${callbackUrl}`);
    }
    return nextResponse;
  }

  try {
    const parsed = (await decryptSession(session)) as DecryptedSession;
    const now = Date.now();
    const accessExpired = parsed.exp < now;

    if (!parsed.accessToken || accessExpired) {
      const cookieStore = await cookies();
      cookieStore.delete("clb-session");

      signinRoute.pathname = "/login";
      return NextResponse.redirect(signinRoute);
    }

    if (!accessExpired && isAuthRoute) {
      const dashboardRoute = request.nextUrl.clone();
      dashboardRoute.pathname = "/";
      return NextResponse.redirect(dashboardRoute);
    }
  } catch {
    signinRoute.pathname = "/login";
    return NextResponse.redirect(signinRoute);
  }

  return nextResponse;
}
