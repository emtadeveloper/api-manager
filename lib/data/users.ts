import "server-only";

import db from "@/lib/sqlite";

export async function hasUsers(): Promise<boolean> {
  const user = await db.user.findFirst({
    select: {
      id: true,
    },
  });

  return user !== null;
}
