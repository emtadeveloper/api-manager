import { NextResponse } from "next/server";
import { getAuthSession } from "../../../../utils/session"
export async function GET() {
    const session = await getAuthSession();

    if (!session) {
        return NextResponse.json(
            {
                session: null,
                status: "unauthenticated",
            },
            { status: 401 }
        );
    }

    return NextResponse.json({
        session: {
            user: {
                id: session.id,
                name: session.name,
                email: session.username,
                image: null,
            },
            expires: new Date(
                session.expires
            ).toISOString(),
        },

        status: "authenticated",
    });
}