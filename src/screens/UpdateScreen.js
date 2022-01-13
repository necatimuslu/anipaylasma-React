import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMoment } from "../actions/momentActions";
import { getMomentById } from "../services/momentService";
import Filebase64 from "react-file-base64";
import { toast } from "react-toastify";
const UpdateScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    fetchMoment();

    return () => {
      setFormData();
    };
  }, []);

  const fetchMoment = () => {
    getMomentById(match.params.id).then((res) => {
      setFormData({ ...formData, ...res.data });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateMoment(match.params.id, formData));
    history.push("/");
  };

  const updateForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-1">
          <label>Anı başlığı</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="form-control"
          />
        </div>
        <div className="form-group mb-1">
          <label>Anı Yazarı</label>
          <input
            type="text"
            value={formData.creator}
            onChange={(e) =>
              setFormData({ ...formData, creator: e.target.value })
            }
            className="form-control"
          />
        </div>
        <div className="form-group mb-1">
          <label>Paylaşılacak Anı</label>
          <textarea
            type="text"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="form-control"
          />
        </div>
        <div className="form-group mb-1">
          <Filebase64
            value={formData.image}
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
          />
        </div>
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            <button className="btn btn-outline-success btn-block" type="submit">
              Güncelle
            </button>
          </div>
        </div>
      </form>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">{updateForm()}</div>
      </div>
    </div>
  );
};

export default UpdateScreen;
