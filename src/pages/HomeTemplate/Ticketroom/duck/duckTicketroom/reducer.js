import * as ActionType from "./types"

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const ticketroomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.TICKETROOM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        };

        case ActionType.TICKETROOM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        };

        case ActionType.TICKETROOM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        };

        default:
            return { ...state };
    }
}
export default ticketroomReducer;