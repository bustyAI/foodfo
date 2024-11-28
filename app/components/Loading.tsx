import React from "react";

// Components
import LoadingCircle from "./LoadingCircle";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center tracking-wider mt-4">
      <div className="flex flex-row space-x-4">
        <LoadingCircle height="h-4" width="w-4" />
        <LoadingCircle height="h-4" width="w-4" />
        <LoadingCircle height="h-4" width="w-4" />
        <LoadingCircle height="h-4" width="w-4" />
        <LoadingCircle height="h-4" width="w-4" />
        <LoadingCircle height="h-4" width="w-4" />
      </div>
    </div>
  );
};

export default Loading;
