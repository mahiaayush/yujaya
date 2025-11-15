import {
  GET_PRIVACY_SUCCESS,
  GET_PRIVACY_ERROR
} from "../constants";

const initialState = {
  PrivacyResponse: {
    data: {},
  }
};

const getPrivacyReducer = (state = initialState, action ) => {
  switch (action.type) {
    case GET_PRIVACY_SUCCESS:
      return {
        ...state,
        PrivacyResponse: {
          ...state.PrivacyResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_PRIVACY_ERROR:
      return {
        ...state,
        PrivacyResponse: {
          ...state.PrivacyResponse,
          data: { rows: [] },
          success: false,
        },
      };
    default:
      return state;
  }
};

export { getPrivacyReducer };