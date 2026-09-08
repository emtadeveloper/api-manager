import type { Request } from "express";

export interface AuthSession {
  id: string;
  username: string;
  name: string;
  expires: number;
}

export interface AuthenticatedRequest extends Request {
  session?: AuthSession;
}
