import { NextRequest, NextResponse } from "next/server";
import { setAuthCookie } from "@/utils/session";

const USERS = [
  {
    id: "1",
    username: "admin@rasan.com",
    password: "Admin123!",
    name: "مدیر سیستم",
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const user = USERS.find(
      (item) => item.username.toLowerCase() === String(body.username).toLowerCase() && item.password === body.password,
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "نام کاربری یا رمز عبور اشتباه است",
        },
        { status: 401 },
      );
    }

    await setAuthCookie({
      id: user.id,
      username: user.username,
      name: user.name,
    });

    return NextResponse.json({
      success: true,
      message: "ورود موفق بود",
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "خطای داخلی سرور",
      },
      { status: 500 },
    );
  }
}
