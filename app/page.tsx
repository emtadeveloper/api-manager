
import { hasUsers } from "../lib/data/users";

export default async function HomePage() {
  const hasUser = await hasUsers();
  return <></>;
  // if (!hasUser) {
  //   redirect("/initialize");
  // }

  // redirect("/initialize");
}
