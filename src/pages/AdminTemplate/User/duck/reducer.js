import * as ActionTypes from "./type";
const initialState = {
  loading: false,
  data: null,
  error: null,
};

const dataUserAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DATA_USER_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.GET_DATA_USER_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.GET_DATA_USER_FAIL: {
      state.loading = true;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default dataUserAdminReducer;
