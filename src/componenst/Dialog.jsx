import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Dialog = () => {
  const [yesClicked, setYesClicked] = useState(false);
  const [noOrCloseClicked, setNoOrClodeClicked] = useState(false);

  return (
    <>
      <div
        className={`${
          noOrCloseClicked ? "hidden" : "flex"
        } justify-center items-center bg-gray-500 bg-opacity-80 h-full w-full top-0  absolute `}
      >
        <div className="flex flex-col justify-between items-center bg-white p-4 rounded-md shadow-md relative">
          <MdOutlineClose
            onClick={() => setNoOrClodeClicked(true)}
            className="absolute right-2 top-2 cursor-pointer"
            size={20}
          />
          <div className="font-semibold text-slate-600 w-[80%] mt-4">
            Are you sure want to delete this contact ?{" "}
          </div>

          <div className=" flex justify-evenly w-full mt-6">
            <h1
              onClick={() => setYesClicked(true)}
              className="cursor-pointer text-blue-600 font-semibold hover:bg-blue-600 hover:text-white duration-150 ease-in-out px-4 py-1 rounded-md"
            >
              Yes
            </h1>
            <h1
              onClick={() => setNoOrClodeClicked(true)}
              className="cursor-pointer text-blue-600 font-semibold hover:bg-blue-600 hover:text-white duration-150 ease-in-out px-4 py-1 rounded-md"
            >
              No
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
