import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";

const Signup = ({ setIsLoggin }) => {
  return (
    <div>
      <Template
        heading="Join the millions learning to code with StudyNotion for free"
        formType="signUp"
        image={signupImg}
        setIsLoggin={setIsLoggin}
      />
    </div>
  );
};

export default Signup;
