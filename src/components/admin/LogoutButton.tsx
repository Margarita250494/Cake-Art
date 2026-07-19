import AdminMainButton from "@/components/buttons/AdminMainButton";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    router.push("/");
  };
  return (
    <AdminMainButton
      disabled={false}
      typeButton="button"
      labelButton="Logout"
      onClick={handleLogout}
    />
  );
};
export default LogoutButton;
