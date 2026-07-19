"use client";

import AdminMainButton from "@/components/buttons/AdminMainButton";
import Input from "@/components/form/Input";
import { useLogin } from "@/hooks/useLogin";

export const LoginForm = () => {
  const { email, setEmail, handleSubmit, password, setPassword } = useLogin();
  return (
    <section className="w-full flex-1 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-100"
      >
        <div className="flex flex-col gap-2">
          <Input
            label="Login"
            id="login"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <AdminMainButton
          disabled={!email || !password}
          typeButton="submit"
          labelButton="Log In"
        />
      </form>
    </section>
  );
};
export default LoginForm;
