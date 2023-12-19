import React from "react";
import Template from "../components/Template";
import loginImage from "../assets/login.png";

const Login = ({setIsLoggin}) => {
  return (
    <div>
      <Template heading="Welcome Back" formType="logIn" image={loginImage} setIsLoggin={setIsLoggin}/>
    </div>
  );
};

export default Login;
