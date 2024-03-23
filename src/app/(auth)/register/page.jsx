import RegisterForm from "@/components/registerform/registerForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center my-5 md:my-10 lg:my-20">
      <div className="w-[500px] bg-[var(--bgSoft)] p-4 md:p-6 lg:p-[50px] flex flex-col text-center gap-[30px] rounded-md">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
