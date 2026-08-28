import { NextRequest, NextResponse } from "next/server";
import { decryptSession } from "@/utils/session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const sessionCookie = request.cookies.get("clb-session")?.value;

  const isLogin = pathname === "/login";

  // API های Auth آزاد باشند
  if (pathname.startsWith("/api/auth/")) {
    return NextResponse.next();
  }

  // Login
  if (isLogin) {
    if (sessionCookie) {
      try {
        const session = await decryptSession(sessionCookie);

        if (session.expires > Date.now()) {
          return NextResponse.redirect(new URL("/", request.url));
        }
      } catch {
        // Cookie نامعتبر است
      }
    }

    return NextResponse.next();
  }

  // کاربر لاگین نیست
  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // بررسی Session
  try {
    const session = await decryptSession(sessionCookie);

    if (!session.expires || session.expires < Date.now()) {
      const response = NextResponse.redirect(new URL("/login", request.url));

      response.cookies.delete("clb-session");

      return response;
    }

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));

    response.cookies.delete("clb-session");

    return response;
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
