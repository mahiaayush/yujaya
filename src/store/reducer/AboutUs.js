import {
  GET_ABOUT_US_SUCCESS,
  GET_ABOUT_US_ERROR
} from "../constants";

const initialState = {
  FaqResponse: {
    data: {},
  }
};

const getAboutUsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case GET_ABOUT_US_SUCCESS:
      return {
        ...state,
        AboutUsResponse: {
          ...state.AboutUsResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_ABOUT_US_ERROR:
      return {
        ...state,
        AboutUsResponse: {
          ...state.AboutUsResponse,
          data: { rows: [] },
          success: false,
        },
      };
    default:
      return state;
  }
};

export { getAboutUsReducer };