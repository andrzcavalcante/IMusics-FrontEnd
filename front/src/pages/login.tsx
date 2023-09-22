import LoginForm from "@/components/loginForm";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <main className="body min-h-screen flex justify-center items-center">
      <LoginForm />
    </main>
  );
};

export default Login;
