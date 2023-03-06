import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil";


export const actTicketroom = (maLichChieu) => {
    return (dispatch) => {
        dispatch(actTicketroomRequest());

        api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then((result) => {
                dispatch(actTicketroomSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actTicketroomFail(error));
            })
    }
}

const actTicketroomRequest = () => {
    return {
        type: ActionType.TICKETROOM_REQUEST
    }
}

const actTicketroomSuccess = (data) => {
    return {
        type: ActionType.TICKETROOM_SUCCESS,
        payload: data
    }
}

const actTicketroomFail = (error) => {
    return {
        type: ActionType.TICKETROOM_FAIL,
        payload: error,
    }
}