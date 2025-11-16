import {
  GET_CASE_STUDY_DETAIL_SUCCESS,
  GET_CASE_STUDY_DETAIL_ERROR
} from "../constants";

const initialState = {
  CaseStudyDetailResponse: {
    data: {},
  }
};

const getCaseStudyDetailReducer = (state = initialState, action ) => {
  switch (action.type) {
    case GET_CASE_STUDY_DETAIL_SUCCESS:
      return {
        ...state,
        CaseStudyDetailResponse: {
          ...state.CaseStudyDetailResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_CASE_STUDY_DETAIL_ERROR:
      return {
        ...state,
        CaseStudyDetailResponse: {
          ...state.CaseStudyDetailResponse,
          data: { rows: [] },
          success: false,
        },
      };
    default:
      return state;
  }
};

export { getCaseStudyDetailReducer };