import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formData.password != formData.confirmPassword) {
      toast.error("password doesnot match");
      return;
    }

    setIsLoggin(true);
    toast.success("Account created successfully");
    navigate("/dashboard");
  };
  return (
    <div onSubmit={submitHandler}>
      {/* instructor or student button */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className="bg-richblack-900 text-richblack-5 bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"
        >
          Student
        </button>
        <button
          className="bg-richblack-900 text-richblack-5 bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"
        >
          Instructor
        </button>
      </div>

      {/* Form */}
      <form>
        {/* firstname and last name */}
        <div className="flex gap-x-4 mt-[20px]">
          <lebel className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.firstname}
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter Your first name"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </lebel>

          <lebel className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.lastname}
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Your last name"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </lebel>
        </div>

        {/* email address */}

        <div className="mt-[20px]">
          <lebel className="w-full mt-[20px]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              value={formData.email}
              name="email"
              onChange={changeHandler}
              placeholder="Enter Your Email address"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </lebel>
        </div>

        {/* password and confirmPassword */}
        <div className="w-full flex gap-x-4 mt-[20px]">
          <lebel className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </lebel>

          <lebel className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </lebel>
        </div>

        <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
