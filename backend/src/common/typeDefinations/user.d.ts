import type { IUser } from "../../module/users/interface/user-request.interface";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export {};
