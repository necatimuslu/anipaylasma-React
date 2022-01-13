import React from "react";
import RegisterForm from "../components/RegisterForm";

const UserRegister = ({ history }) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center">Kayıt ol </h3>
          <RegisterForm history={history} />
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
