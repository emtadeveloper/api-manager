"use server";

import { cookies } from "next/headers";
import { EncryptJWT, jwtDecrypt } from "jose";

const COOKIE_NAME = "clb-session";

function getSecretKey() {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error("AUTH_SECRET is not configured");
  }

  const key = new TextEncoder().encode(secret);

  if (key.length !== 32) {
    throw new Error(`AUTH_SECRET must be exactly 32 bytes. Current length: ${key.length}`);
  }

  return key;
}

export interface AuthSession {
  id: string;
  username: string;
  name: string;
  expires: number;
}

export async function encryptSession(session: AuthSession) {
  return new EncryptJWT({
    ...session,
  })
    .setProtectedHeader({
      alg: "dir",
      enc: "A256GCM",
    })
    .setIssuedAt()
    .setExpirationTime("1d")
    .encrypt(getSecretKey());
}

export async function decryptSession(token: string): Promise<AuthSession> {
  const { payload } = await jwtDecrypt(token, getSecretKey());

  return payload as unknown as AuthSession;
}

export async function setAuthCookie(user: { id: string; username: string; name: string }) {
  const session: AuthSession = {
    id: user.id,
    username: user.username,
    name: user.name,
    expires: Date.now() + 24 * 60 * 60 * 1000,
  };

  const encryptedSession = await encryptSession(session);

  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, encryptedSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",

    sameSite: "lax",
    path: "/",

    maxAge: 60 * 60 * 24,
  });

  console.log("AUTH COOKIE SET");
  console.log("Cookie name:", COOKIE_NAME);
}

export async function getAuthSession() {
  try {
    const cookieStore = await cookies();

    const cookie = cookieStore.get(COOKIE_NAME);

    console.log("SESSION COOKIE:", {
      exists: !!cookie,
      valueLength: cookie?.value?.length ?? 0,
    });

    if (!cookie?.value) {
      console.log("SESSION COOKIE NOT FOUND");
      return null;
    }

    const session = await decryptSession(cookie.value);

    console.log("SESSION DECRYPTED:", {
      id: session.id,
      username: session.username,
      expires: session.expires,
    });

    if (!session.expires || session.expires < Date.now()) {
      console.log("SESSION EXPIRED");
      return null;
    }

    return session;
  } catch (error) {
    console.error("GET AUTH SESSION ERROR:", error);

    return null;
  }
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIE_NAME);
}
