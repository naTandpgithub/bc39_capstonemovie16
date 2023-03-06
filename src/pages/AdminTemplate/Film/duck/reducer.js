import * as ActionTypes from "./type";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const dataFilmRenderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FILM_DATA_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.FILM_DATA_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.FILM_DATA_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default dataFilmRenderReducer;
