import { NextResponse } from "next/server";
import { clearAuthCookie } from "@/utils/session";

export async function POST() {
    try {
        await clearAuthCookie();

        return NextResponse.json({
            success: true,
            message: "با موفقیت از حساب خارج شدید",
        });
    } catch (error) {
        console.error("Logout error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "خطا در خروج از حساب",
            },
            { status: 500 }
        );
    }
}