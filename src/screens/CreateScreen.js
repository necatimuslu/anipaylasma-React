import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Filebase64 from "react-file-base64";
import { toast } from "react-toastify";
import { createMoment } from "../actions/momentActions";

const CreateScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    content: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createMoment(formData)).then(() =>
      toast.success("Anı oluşturuldu")
    );

    history.push("/");
  };
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-7 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-1">
              <label>Anı başlığı</label>
              <input
                type="text"
                placeholder="Anı başlığı"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-1">
              <label>Anı Yazarı</label>
              <input
                type="text"
                placeholder="Anı yazarı"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, creator: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-1">
              <label>Paylaşılacak Anı</label>
              <textarea
                type="text"
                placeholder="Anı yazarı"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              />
            </div>
            <div className="form-group my-1">
              <Filebase64
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setFormData({ ...formData, image: base64 })
                }
              />
            </div>
            <div className="row mt-3">
              <div className="col-md-6 offset-md-3">
                <button
                  className="btn btn-outline-info btn-block"
                  type="submit"
                >
                  Gönder
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateScreen;
