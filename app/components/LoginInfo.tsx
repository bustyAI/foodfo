import React from "react";

interface LoginInfoProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  loginType: string;
  inputType?: string;
  placeHolder?: string;
  inputId: string;
}

const LoginInfo = ({
  Icon,
  loginType,
  inputType,
  placeHolder,
  inputId,
}: LoginInfoProps) => {
  return (
    <div className="flex flex-col w-full items-center mb-4">
      <div className="flex flex-col w-3/4 space-y-2">
        <label htmlFor={inputId} className="text-left text-sm font-medium">
          {loginType}
        </label>
        <div className="flex flex-row border-2 border-slate-200 rounded-lg p-2">
          <Icon
            className="mr-2 mt-1
          "
          />
          <div className=" border-r-2 border-slate-200 rounded-lg"></div>
          <input
            autoFocus={true}
            type={inputType}
            placeholder={placeHolder}
            className="flex-1 outline-none border-none px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginInfo;
