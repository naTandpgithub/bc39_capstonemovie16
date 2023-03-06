import * as ActionTypes from "./type";
import api from "./../../../../utils/apiUtil";

const renderUserApi = () => {
  return (dispatch) => {
    dispatch(renderUserRequest());
    api
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP15")
      .then((result) => {
        dispatch(renderUserSucess(result.data.content));
        // console.log(result.data.content);
        // setListUser(result.data.content);
      })
      .catch((error) => {
        dispatch(renderUserFail(error));
      });
  };
};

const renderUserRequest = () => {
  return {
    type: ActionTypes.GET_DATA_USER_REQUEST,
  };
};
const renderUserSucess = (data) => {
  return {
    type: ActionTypes.GET_DATA_USER_SUCCESS,
    payload: data,
  };
};
const renderUserFail = (error) => {
  return {
    type: ActionTypes.GET_DATA_USER_FAIL,
    payload: error,
  };
};

export default renderUserApi;
