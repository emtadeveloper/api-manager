import { post } from "./fetch";

export const signIn = async (model: { username: string; password: string }) => {
  try {
    const result = await post("/api/auth/login", model, {
      "Content-Type": "application/json",
    });

    return {
      isSuccess: result?.success === true,
      message: result?.message,
      user: result?.user,
    };
  } catch (error) {
    console.error("Login error:", error);

    return {
      isSuccess: false,
      message: error instanceof Error ? error.message : "خطا در ورود",
    };
  }
};

export const signOut = async () => {
  try {
    const result = await post(
      "/api/auth/logout",
      {},
      {
        "Content-Type": "application/json",
      },
    );

    return {
      isSuccess: result?.success === true,
      message: result?.message,
    };
  } catch (error) {
    console.error("Logout error:", error);

    return {
      isSuccess: false,
      message: error instanceof Error ? error.message : "خطا در خروج از حساب",
    };
  }
};
