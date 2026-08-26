import { jwtVerify, SignJWT, JWTPayload } from "jose";
import { cookies } from "next/headers";

interface SessionPayload {
  exp: number;
  accessToken: string;
}

const encodedKey = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function encryptSession(session: SessionPayload): Promise<string> {
  return new SignJWT(session as unknown as JWTPayload).setProtectedHeader({ alg: "HS256" }).sign(encodedKey);
}

export async function decryptSession(session: string): Promise<SessionPayload> {
  const { payload } = await jwtVerify(session, encodedKey, {
    algorithms: ["HS256"],
  });
  return payload as unknown as SessionPayload;
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  try {
    const sessionCookie = cookieStore.get("clb-session")?.value;
    if (!sessionCookie) {
      return null;
    }
    const session = await decryptSession(sessionCookie);
    return session;
  } catch {
    return null;
  }
}
