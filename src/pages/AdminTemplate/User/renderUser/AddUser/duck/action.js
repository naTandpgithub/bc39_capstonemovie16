import * as ActionTypes from "./type";
import api from "./../../../../../../utils/apiUtil";
export const AddUserApi = (user) => {
  return (dispatch) => {
    dispatch(AddUserRequest());
    api
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((result) => {
        dispatch(AddUserSuccess(result.data.content));
        alert("Thêm Thành Công");
      })
      .catch((error) => {
        alert(error.content);
        console.log(error.content);
        dispatch(AddUserFail(error));
      });
  };
};

const AddUserRequest = () => {
  return {
    type: ActionTypes.ADD_USER_REQUEST,
  };
};
const AddUserSuccess = (data) => {
  return {
    type: ActionTypes.ADD_USER_SUCCESS,
    payload: data,
  };
};
const AddUserFail = (error) => {
  return {
    type: ActionTypes.ADD_USER_FAIL,
    payload: error,
  };
};
