import React from "react";
import frameImage from "../assets/frame.png";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ heading, formType, image, setIsLoggin }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {heading}
        </h1>
      </div>
      <div className="text-[1.125rem] leading[1.625rem] mt-4">
        <span className="text-richblack-100">
          Build skills for today, tomorrow, and beyond.
        </span>
        <span className="text-blue-100 italic">
          Education to future-proof your career.
        </span>
      </div>

      <div>
        {formType === "signUp" ? (
          <SignUpForm setIsLoggin={setIsLoggin} />
        ) : (
          <LoginForm setIsLoggin={setIsLoggin} />
        )}
      </div>

      <div className="flex w-full items-center my-4 gap-x-2">
        <div className="w-full h-[1px] bg-richblack-700"></div>
        <span className="text-richblack-700 font-medium leading[1.375rem]">
          or
        </span>
        <div className="w-full h-[1px] bg-richblack-700"></div>
      </div>

      <button
        className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 "
      >
        <FcGoogle />
        Sign in with Google
      </button>

      <div className="relative w-11/12 max-w-[450px] ">
        <div>
          <img src={frameImage} height={504} width={558} loading="lazy"></img>
        </div>
        <div>
          <img src={image} height={504} width={558} loading="lazy"></img>
        </div>
      </div>
    </div>
  );
};

export default Template;
