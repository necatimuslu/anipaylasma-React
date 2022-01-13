import React, { useEffect, useState } from "react";
import * as mo from "moment";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoments, deleteMoment } from "../actions/momentActions";

const Home = () => {
  const dispatch = useDispatch();
  const { moments } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (!moments[0]) {
      fetchMoment();
    }
  }, [dispatch]);

  const fetchMoment = () => {
    dispatch(fetchMoments());
  };

  return (
    <div className="container">
      <h2 className="text-center mt-2">Anı Listesi</h2>
      <div className="row">
        {moments.map((moment) => {
          return (
            <div key={moment._id} className="col-md-4 my-2">
              <div className="card mb-3">
                <div className="card-header">
                  <div className="card-img">
                    <img
                      src={moment.image}
                      className="img-fluid"
                      style={{ height: "250px", width: "100%" }}
                    />
                  </div>
                  <h5 className="text-center mt-3">
                    {" "}
                    {moment.title
                      ? moment.title.substring(0, 30) + "..."
                      : moment.title}
                  </h5>
                </div>
                <div className="card-body">
                  <p>{mo(moment.createdAt).toNow()}</p>
                  <h5 className="card-title ">Yazar: {moment.creator}</h5>
                  <p className="card-text">
                    {moment.content
                      ? moment.content.substring(0, 100) + "..."
                      : moment.content}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(deleteMoment(moment._id)).then(() =>
                        toast.error("Anı silindi")
                      );
                      fetchMoment();
                    }}
                  >
                    Sil
                  </button>
                  <button className="btn btn-success ml-2">
                    <Link className="text-white" to={`/update/${moment._id}`}>
                      Güncelle{" "}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
