import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 bg-opacity-80 h-full w-full top-0  absolute">
      <ReactLoading type="balls" color="#3a86ff" height={100} width={100} />
    </div>
  );
};

export default Loading;
