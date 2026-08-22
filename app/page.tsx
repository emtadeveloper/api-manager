import { redirect } from "next/navigation";

import { hasUsers } from "../lib/data/users";

export default async function HomePage() {
  const hasUser = await hasUsers();

  if (!hasUser) {
    redirect("/initialize");
  }

  redirect("/initialize");
}
