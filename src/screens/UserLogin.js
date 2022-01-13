import React from "react";
import LoginForm from "../components/LoginForm";

const UserLogin = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
            <h3 className="text-center">Giriş </h3>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
