import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center my-5 md:my-10 lg:my-20">
      <div className="w-[500px] bg-[var(--bgSoft)] p-4 md:p-6 lg:p-[50px] flex flex-col text-center gap-[30px] rounded-md">
        <form action={handleGithubLogin}>
          <button className="p-5 cursor-pointer bg-white text-black font-bold text-[var(--textColor)] border-none rounded-md w-full">
            Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
