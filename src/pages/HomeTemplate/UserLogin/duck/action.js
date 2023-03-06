import * as ActionType from "./types";
import api from "../../../../utils/apiUtil";
import { Link, Navigate } from "react-router-dom";

export const actUserLogin = (user,navigate,preRoute) => {
    return (dispatch) => {
        dispatch(actUserLoginRequest);

        api.post(`QuanLyNguoiDung/DangNhap`, user)
            .then((result) => {
                console.log(result);
                dispatch(actUserLoginSuccess(result.data.content));

                localStorage.setItem("userLogin", JSON.stringify(result.data.content))
                alert("dn thanh cong");
                navigate("",{replace:true});
                // <Navigate to={"/"}  replace />
            })
            .catch((error) => {
                console.log(error);
                dispatch(actUserLoginFail(error))
            })

    }
}

export const actUserLoginRequest = () => {
    return {
        type: ActionType.USER_LOGIN_REQUEST,
    }
}

export const actUserLoginSuccess = (data) => {
    return {
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: data
    }
}

export const actUserLoginFail = (error) => {
    return {
        type: ActionType.USER_LOGIN_FAIL,
        payload: error,
    }
}
