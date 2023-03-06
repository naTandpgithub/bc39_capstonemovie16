import * as Actiontype from "./types"
import api from "../../../../../../utils/apiUtil"

export const actListComplex = (complex) => {
    return (dispatch) => {
        dispatch(actListComplexRequest);

        api.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${complex}&maNhom=GP15`)
            .then((result) => {
                console.log(result);
                dispatch(actListComplexSuccess(result.data.content))
            })
            .catch((error) => {
                console.log(error);
                dispatch(actListComplexFail(error))
            })
    }
}

const actListComplexRequest = () => {
    return {
        type: Actiontype.LIST_COMPLEX_REQUEST
    }
}

const actListComplexSuccess = (data) => {
    return {
        type: Actiontype.LIST_COMPLEX_SUCCESS,
        payload: data
    }
}
const actListComplexFail = (error) => {
    return {
        type: Actiontype.LIST_COMPLEX_FAIL,
        payload: error,
    }
}