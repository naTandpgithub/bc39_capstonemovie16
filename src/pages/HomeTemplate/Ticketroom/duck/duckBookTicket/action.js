import api from "../../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actBookTicket=(listTicket)=>{
    return(dispatch)=>{
        dispatch(booktTicketRequest());

        api.post(`QuanLyDatVe/DatVe`,listTicket)
        .then((result)=>{
            console.log(result);
            dispatch(bookTicketSuccess(result.data.content))
            alert(result.data.content);          
        })
        .catch((error)=>{
            console.log(error);
            dispatch(bookTicketFail(error));
        })
    }
}

const booktTicketRequest = () => {
    return {
        type: ActionType.BOOK_TICKET_REQUEST
    }
}

const bookTicketSuccess = (data) => {
    return {
        type: ActionType.BOOK_TICKET_SUCCESS,
        payload: data,
    }
}

const bookTicketFail = (error) => {
    return {
        type: ActionType.BOOK_TICKET_FAIL,
        payload: error,
    }
}