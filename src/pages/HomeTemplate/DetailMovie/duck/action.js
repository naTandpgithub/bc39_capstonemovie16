import * as ActionType from "./types";
import api from "../../../../utils/apiUtil";

export const actDetailMovie = (maPhim) => {
    return (dispatch) => {
        dispatch(actDetailMovieRequest);

        api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
            .then((result) => {
                dispatch(actDetailMovieSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actDetailMovieFail(error))
            })

    }
};

const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST,
    }
};

const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
};

const actDetailMovieFail = (error) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAIL,
        payload: error,
    }
};
