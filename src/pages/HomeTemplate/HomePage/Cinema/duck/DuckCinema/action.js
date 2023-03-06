import * as Actiontype from "./types"
import api from "../../../../../../utils/apiUtil";

export const actListCinema = () => {
    return (dispatch) => {
        dispatch(actListCinemaRequest());

        api.get(`/QuanLyRap/LayThongTinHeThongRap`)
            .then((result) => {
                dispatch(actListCinemaSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actListCinemaFail(error))
            })
    }
}
const actListCinemaRequest = () => {
    return {
        type: Actiontype.LIST_CINEMA_REQUEST
    }
}
const actListCinemaSuccess = (data) => {
    return {
        type: Actiontype.LIST_CINEMA_SUCCESS,
        payload: data,
    }
}
const actListCinemaFail = (error) => {
    return {
        type: Actiontype.LIST_CINEMA_FAIL,
        payload: error,
    }
}