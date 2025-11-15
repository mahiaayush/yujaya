import {
  GET_FAQ_SUCCESS,
  GET_FAQ_ERROR
} from "../constants";

const initialState = {
  FaqResponse: {
    data: {},
  }
};

const getFaqReducer = (state = initialState, action ) => {
  switch (action.type) {
    case GET_FAQ_SUCCESS:
      return {
        ...state,
        FaqResponse: {
          ...state.FaqResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_FAQ_ERROR:
      return {
        ...state,
        FaqResponse: {
          ...state.FaqResponse,
          data: { rows: [] },
          success: false,
        },
      };
    default:
      return state;
  }
};

export { getFaqReducer };