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
    <button
      onClick={handleLogout}
      className="font-medium text-foreground cursor-pointer scale-100 duration-500 hover:scale-[1.1]"
    >
      Logout
    </button>
  );
};
export default LogoutButton;
