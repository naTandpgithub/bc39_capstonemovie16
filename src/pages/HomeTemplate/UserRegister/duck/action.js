import * as ActionType from "./types";
import api from "../../../../utils/apiUtil";

export const actUserRegister = (user, navigate) => {
    return (dispatch) => {
        dispatch(actUserRegisterRequest);

        api.post(`QuanLyNguoiDung/DangKy`, user)
            .then((result) => {
                dispatch(actUserRegisterSuccess(result.data.content));
                alert("Đăng kí thành công!!!")
                navigate("/login", { replace: true });
            })
            .catch((error) => {
                dispatch(actUserRegisterFail(error))
            })
    }
}

export const actUserRegisterRequest = () => {
    return {
        type: ActionType.USER_REGISTER_REQUEST,
    }
};

export const actUserRegisterSuccess = (data) => {
    return {
        type: ActionType.USER_REGISTER_SUCCESS,
        payload: data
    }
};

export const actUserRegisterFail = (error) => {
    return {
        type: ActionType.USER_REGISTER_FAIL,
        payload: error
    }
};