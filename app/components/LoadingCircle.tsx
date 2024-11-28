import React from "react";

interface LoadingCircleProps {
  height: string;
  width: string;
}

const LoadingCircle = ({ height, width }: LoadingCircleProps) => {
  return (
    <div
      className={`bg-orange-500 rounded-full ${height} ${width} loading`}
    ></div>
  );
};

export default LoadingCircle;
