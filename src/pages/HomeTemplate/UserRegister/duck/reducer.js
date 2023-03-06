import * as ActionType from "./types"

const initalState = {
    loading: false,
    data: null,
    error: null
};

const userRegisterReducer = (state = initalState, action) => {
    switch (action.type) {
        case ActionType.USER_REGISTER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case ActionType.USER_REGISTER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case ActionType.USER_REGISTER_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }


        default:
            return { ...state };
    }
};
export default userRegisterReducer;