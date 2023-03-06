import * as ActionType from "./types";
import api from "../../../../../utils/apiUtil";

export const actCarousel = () => {
    return (dispatch) => {
        dispatch(actCarouselRequest);

        api.get("QuanLyPhim/LayDanhSachBanner")
            .then((result) => {
                console.log(result);
                dispatch(actCarouselSuccess(result.data.content));
            })
            .catch((error) => {
                console.log(error);
                dispatch(actCarouselFail(error));
            })
    }
};

export const actCarouselRequest = () => {
    return {
        type: ActionType.CAROUSEL_REQUEST,
    }
}

export const actCarouselSuccess = (data) => {
    return {
        type: ActionType.CAROUSEL_SUCCESS,
        payload: data,
    }
}

export const actCarouselFail = (error) => {
    return {
        type: ActionType.CAROUSEL_FAIL,
        payload: error,
    }
}
