import React from "react";

// Components
import { LoginInfo, Button } from "../components";

// React Icons
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  return (
    <div className="overflow-hidden flex justify-center items-center min-h-screen min-w-full bg-orange-300 ">
      <div className="flex flex-col items-center justify-center mb-40 w-full bg-white rounded-xl m-8 p-4">
        <h1 className="text-4xl font-semibold mb-12">Login</h1>
        <LoginInfo Icon={CiMail} loginType="Email" />
        <LoginInfo Icon={IoEyeOutline} loginType="Password" />
        <div className=" w-3/4 flex justify-end">
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
        <div className="flex items-center justify-between w-full mt-10">
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
