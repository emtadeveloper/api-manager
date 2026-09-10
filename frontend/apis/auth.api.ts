import { post } from "./fetch";

export const registerUser = (model: {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}) => post("/api/auth/register", model, { "Content-Type": "application/json" });
