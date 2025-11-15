import {
  GET_HOME_SUCCESS,
  GET_HOME_ERROR
} from "../constants";

const initialState = {
  HomeResponse: {
    data: {},
  }
};

const getHomeReducer = (state = initialState, action ) => {
  switch (action.type) {
    case GET_HOME_SUCCESS:
      return {
        ...state,
        HomeResponse: {
          ...state.HomeResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_HOME_ERROR:
      return {
        ...state,
        HomeResponse: {
          ...state.HomeResponse,
          data: { rows: [] },
          success: false,
        },
      };
    default:
      return state;
  }
};

export { getHomeReducer };