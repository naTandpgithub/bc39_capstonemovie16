import * as ActionTypes from "./type";
const initialState = {
  loading: false,
  data: null,
  error: null,
};

const deleteFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DETELE_FILM_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionTypes.DETELE_FILM_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionTypes.DETELE_FILM_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default deleteFilmReducer;
