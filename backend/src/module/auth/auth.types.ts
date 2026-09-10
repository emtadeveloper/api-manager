import type { Request } from "express";

export interface AuthSession {
  id: string;
  username: string;
  name: string;
  expires: number;
}

export interface JwtPayload {
  sub?: string;
  username?: string;
  name?: string;
  type?: string;
  exp?: number;
  iat?: number;
}

export interface AuthenticatedRequest extends Request {
  session?: AuthSession;
}
