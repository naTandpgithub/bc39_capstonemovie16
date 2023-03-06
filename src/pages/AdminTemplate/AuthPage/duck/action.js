import { Navigate } from "react-router-dom";
import api from "../../../../utils/apiUtil";
import * as ActionTypes from "./type";

export const actAuthLogin = (user, navigate) => {
  console.log(user);
  return (dispath) => {
    dispath(AuthLoginRequest());

    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        if (result.data.content === " KhachHang") {
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập!",
              },
            },
          });
        }

        dispath(AuthLoginSuccess(result.data.content));
        localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        dispath(AuthLoginFail(error));
      });
  };
};

const AuthLoginRequest = () => {
  return {
    type: ActionTypes.AUTH_REQUEST,
  };
};
const AuthLoginSuccess = (data) => {
  return {
    type: ActionTypes.AUTH_SUCCESS,
    payload: data,
  };
};
const AuthLoginFail = (error) => {
  return {
    type: ActionTypes.AUTH_FAIL,
    payload: error,
  };
};
