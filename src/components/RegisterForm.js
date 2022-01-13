import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userRegister } from "../actions/userActions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Message from "./Message";

const RegisterForm = ({ history }) => {
  const dispatch = useDispatch();

  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const userState = useSelector((state) => state.user);
  const { error } = userState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(userRegister(userForm, history, toast));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-1">
          <label id="username">Kullanıcı Adı</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Lütfen kullanıcı adını giriniz"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, username: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-1">
          <label id="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Lütfen email adresini giriniz"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, email: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-1">
          <label id="password">Şifre</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Lütfen şifrenizi  giriniz"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, password: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-1">
          <label id="confirmPassword">Şifrenizi Doğrulayın</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Lütfen şifrenizi tekrar giriniz"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-outline-info btn-block">
            Kayıt ol
          </button>
        </div>
        <div className="form-group mt-3">
          <p className="float-right ">
            Zaten hesabınız var mı?{" "}
            <span className="ml-3">
              <Link to="/login">Lütfen giriş yapınız</Link>{" "}
            </span>
          </p>
        </div>
        {error && <Message>{error}</Message>}
      </form>
    </>
  );
};

export default RegisterForm;
