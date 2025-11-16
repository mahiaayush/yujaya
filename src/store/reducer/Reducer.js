import {
  GET_PRIVACY_SUCCESS,
  GET_PRIVACY_ERROR,
  GET_TERMC_SUCCESS ,
  GET_TERMC_ERROR,

  GET_DISCLAIMER_SUCCESS,
  GET_DISCLAIMER_ERROR,

  GET_CONTACT_SUCCESS,
  GET_CONTACT_ERROR,

  GET_CASE_STUDY_SUCCESS,
  GET_CASE_STUDY_ERROR,

  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_ERROR,

  GET_ARTICLE_DETAILS_SUCCESS,
  GET_ARTICLE_DETAILS_ERROR,
} from "../constants";

const initialState = {
  TermCondResponse: {
    data: {},
  }
};

const getTermCondReducer = (state = initialState, action ) => {
  switch (action.type) {
    case GET_TERMC_SUCCESS:
      return {
        ...state,
        TermCondResponse: {
          ...state.TermCondResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_TERMC_ERROR:
      return {
        ...state,
        TermCondResponse: {
          ...state.TermCondResponse,
          data: { rows: [] },
          success: false,
        },
      };
    default:
      return state;
  }
};

const disclaimerState = {
  DisclaimerResponse: {
    data: {},
  }
};

const getDisclaimerReducer = (state = disclaimerState, action ) => {
  switch (action.type) {
    case GET_DISCLAIMER_SUCCESS:
      return {
        ...state,
        DisclaimerResponse: {
          ...state.DisclaimerResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_DISCLAIMER_ERROR:
      return {
        ...state,
        DisclaimerResponse: {
          ...state.DisclaimerResponse,
          data: { rows: [] },
          success: false,
        },
      };
    default:
      return state;
  }
};

const contactState = {
  ContactResponse: {
    data: {},
  }
};

const getContactReducer = (state = contactState, action ) => {
  switch (action.type) {
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        ContactResponse: {
          ...state.ContactResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_CONTACT_ERROR:
      return {
        ...state,
        ContactResponse: {
          ...state.ContactResponse,
          data: { rows: [] },
          success: false,
        },
      };
    default:
      return state;
  }
};
const caseStudyState = {
  CaseStudyResponse: {
    data: {},
  }
};

const getCaseStudyReducer = (state = caseStudyState, action ) => {
  switch (action.type) {
    case GET_CASE_STUDY_SUCCESS:
      return {
        ...state,
        CaseStudyResponse: {
          ...state.CaseStudyResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_CASE_STUDY_ERROR:
      return {
        ...state,
        CaseStudyResponse: {
          ...state.CaseStudyResponse,
          data: { rows: [] },
          success: false,
        },  
      };
    default:
      return state;
  }
};

const articleState = {
  ArticleResponse: {
    data: {},
  }
};

const getArticleReducer = (state = articleState, action ) => {
  switch (action.type) {
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        ArticleResponse: {
          ...state.ArticleResponse,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_ARTICLE_ERROR:
      return {
        ...state,
        ArticleResponse: {
          ...state.ArticleResponse,
          data: { rows: [] },
          success: false,
        },  
      };
    default:
      return state;
  }
};
const initState = {
  Response: {
    data: {},
  }
};

const getArticleDetailsReducer = (state = initState, action ) => {
  switch (action.type) {
    case GET_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        Response: {
          ...state.Response,
          data: action.payload.data,
          success: true,
        },
      };
    case GET_ARTICLE_DETAILS_ERROR:
      return {
        ...state,
        Response: {
          ...state.Response,
          data: { rows: [] },
          success: false,
        },  
      };
    default:
      return state;
  }
};
export { getTermCondReducer, getDisclaimerReducer, getContactReducer,
  getCaseStudyReducer,
  getArticleReducer,
  getArticleDetailsReducer
};