"use client";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/admin/dashboard");
    }
  };
  return (
    <section className="w-full flex-1 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-[400px]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="login">Email</label>
          <input
            id="login"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 cursor-pointer disabled:opacity-50 disabled:cursor-none disabled:pointer-events-none"
          disabled={!email || !password}
        >
          Login
        </button>
      </form>
    </section>
  );
};
export default LoginForm;
