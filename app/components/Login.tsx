"use client";
import React, { FormEvent } from "react";

// Auth
import { signIn } from "next-auth/react";

// Components
import { LoginInfo, Button } from "../components";

// React Icons
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Form submitted");
    console.log(process.env.GOOGLE_CLIENT_ID);
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  return (
    <div className="overflow-hidden flex justify-center items-center min-h-screen min-w-full bg-orange-300 ">
      <div className="flex flex-col items-center justify-center mb-40 w-full bg-white rounded-xl m-8 p-4">
        <h1 className="text-4xl font-semibold mb-12">Login</h1>
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
        <div className="mt-6">
          <Button
            classParams="w-3/5"
            borderColor="border-blue-500"
            textColor="text-blue-500"
            buttonText="Login with Google"
            buttonHoverColor="bg-blue-500"
            textHoverColor="text-white"
            onClick={handleGoogleLogin}
          />
        </div>
        <div className="flex items-center justify-between w-full mt-10 mb-4">
          <span className="flex-1 border-t border-slate-300"></span>
          <span className=" text-sm mx-4 text-center text-slate-500">
            Or Continue With
          </span>
          <span className="flex-1 border-t border-slate-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
