import React from "react";

interface LoginInfoProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  loginType: string;
}

const LoginInfo = ({ Icon, loginType }: LoginInfoProps) => {
  return (
    <div className="flex flex-col w-full items-center mb-4">
      <div className="flex flex-col w-3/4 space-y-2">
        <h1 className="text-left text-sm font-medium">{loginType}</h1>
        <div className="flex flex-row border-2 border-slate-200 rounded-lg p-2">
          <Icon className="mr-2" />
          <div className=" border-r-2 border-slate-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginInfo;
