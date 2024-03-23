"use client";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);
  return (
    <form action={formAction} className="flex flex-col text-center gap-[30px]">
      <input
        type="text"
        placeholder="username"
        name="username"
        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded-md"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded-md"
      />
      <button className="p-5 cursor-pointer bg-[var(--btn)] font-bold text-[var(--textColor)] border-none rounded-md">
        Login
      </button>
      {state?.error}
      <Link href="/register">
        {"Don't Have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
