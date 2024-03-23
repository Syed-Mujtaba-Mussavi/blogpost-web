"use client";
import { useFormState } from "react-dom";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction} className="flex flex-col text-center gap-[30px]">
      <input
        type="text"
        placeholder="username"
        name="username"
        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded-md"
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded-md"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded-md"
      />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded-md"
      />
      <button className="p-5 cursor-pointer bg-[var(--btn)] font-bold text-[var(--textColor)] border-none rounded-md">
        Register
      </button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
