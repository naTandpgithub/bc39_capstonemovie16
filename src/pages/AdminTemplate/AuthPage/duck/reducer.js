import * as ActionTypes from "./type";

const initalState = {
  loading: false,
  data: null,
  error: null,
};

const authLoginReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.AUTH_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.AUTH_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default authLoginReducer;
