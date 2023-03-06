import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actAuthLogin } from "./duck/action";
import { useNavigate, Navigate } from "react-router-dom";
import Loader from "../../../component/Loader";

export default function AuthPage() {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const dispatch = useDispatch();
  const props = useSelector((state) => state.authLoginReducer);

  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState(
      {
        ...state,
        [name]: value,
      },
      console.log(state)
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actAuthLogin(state, navigate));
  };

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };
  if (localStorage.getItem("UserAdmin"))
    return <Navigate replace to="/admin" />;
  if (props.loading) return <Loader />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>Login</h1>
          {renderNoti()}
          <form onSubmit={handleOnSubmit}>
            <div className="form-group    ">
              <label>Tai Khoản</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Mật Khẩu</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
              />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
