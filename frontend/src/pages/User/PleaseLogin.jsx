import React from "react";
import loginbg from "../../image/login.jpeg";
import { Link } from "react-router-dom";

const PleaseLogin = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className=" py-40">
        <Link to="/log-in">
          <img src={loginbg} alt="loginbg" className=" h-72" />
        </Link>
      </div>
    </div>
  );
};

export default PleaseLogin;
