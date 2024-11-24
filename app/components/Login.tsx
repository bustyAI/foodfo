"use client";
import React, { FormEvent } from "react";

// Components
import LoginForm from "./LoginForm";

const Login = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="overflow-hidden flex justify-center items-center min-h-screen min-w-full bg-orange-300 ">
      <div className="flex flex-col items-center justify-center mb-40 w-full bg-white rounded-xl m-8 p-4">
        <h1 className="text-4xl font-semibold mb-12">Login</h1>

        <LoginForm handleSubmit={handleSubmit} />

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
