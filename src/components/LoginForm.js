import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Message from "./Message";
const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const userState = useSelector((state) => state.user);

  const { error } = userState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(loginUser(userForm, history, toast));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-1">
          <label id="email">Email</label>
          <input
            type="email"
            placeholder="Lütfen mail adresinizi giriniz"
            id="email"
            name="email"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, email: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-1">
          <label id="password">Şifre</label>
          <input
            type="password"
            placeholder="Lütfen şifrenizi giriniz"
            id="password"
            name="email"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, password: e.target.value })
            }
          />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary btn-block">
            Giriş
          </button>
        </div>
        <div className="form-group mt-3">
          <p className="float-right ">
            Hesabınız yok mu?{" "}
            <span className="ml-3">
              <Link to="/register">Lütfen kayıt olunuz</Link>{" "}
            </span>
          </p>
        </div>
        <div>{error && <Message>{error}</Message>}</div>
      </form>
    </>
  );
};

export default LoginForm;
