import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import decode from "jwt-decode";
import { getNewToken } from "../services/userSevice";
const Header = () => {
  const [newToken, setNewToken] = useState("");
  const [user, setUser] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }

    const newAccessToken = async (id) => {
      await dispatch(getNewToken(id));
      setNewToken(JSON.parse(localStorage.getItem("user")));
    };

    const accessToken = user?.accessToken;

    if (accessToken) {
      const decodedToken = decode(accessToken);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        newAccessToken(user.user._id);
      }
    }
  }, [location, user]);

  const exit = async (id) => {
    await dispatch(logout(id));
    setUser(null);
    history.push("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand" to="/">
          Anı Paylaş
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-3">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Anasayfa
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mr-5">
            {user ? (
              <>
                <li className="nav-item active mr-2">
                  <button className="btn btn-outline-success btn-sm">
                    <Link className="nav-link text-black" to="/creator">
                      Anı oluştur
                    </Link>
                  </button>
                </li>
                <li className="nav-item active ">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      exit(user.user._id);
                    }}
                  >
                    <span className="nav-link text-white">Çıkış yap</span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item active mr-2">
                  <button className="btn btn-dark btn-sm">
                    <Link className="nav-link text-white" to="/login">
                      Giris
                    </Link>
                  </button>
                </li>
                <li className="nav-item active ">
                  <button className="btn btn-success btn-sm">
                    <Link className="nav-link" to="/register">
                      Kayıt ol
                    </Link>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
