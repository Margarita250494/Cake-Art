import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function Page() {
  const cookieStore = await cookies();

  const session = cookieStore.get("admin_session");

  if (!session) {
    redirect("/admin");
  }

  return <DashboardClient />;
}
