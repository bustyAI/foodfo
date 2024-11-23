import React, { FormEvent, FormEventHandler } from "react";

// React Icons
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

// Components
import { LoginInfo, Button } from "../components";

interface LoginFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

function LoginForm({ handleSubmit }: LoginFormProps) {
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <LoginInfo
        Icon={CiMail}
        loginType="Email"
        inputType="text"
        placeHolder="savemoney123@gmail.com"
        inputId="email"
      />
      <LoginInfo
        Icon={IoEyeOutline}
        loginType="Password"
        inputType="text"
        placeHolder="keep this secret"
        inputId="password"
      />
      <div className="flex w-5/6 justify-end">
        <h1 className="text-orange-500 underline hover:text-blue-500 hover:cursor-pointer">
          Forgot Password?
        </h1>
      </div>
      <Button
        classParams="w-3/5"
        borderColor="border-orange-500"
        textColor="text-orange-500"
        buttonText="Login"
        buttonHoverColor="bg-orange-500"
        textHoverColor="text-white"
      />
    </form>
  );
}

export default LoginForm;
