import {http, queryBuilder }from "../http";
import {
  API_ENDPOINT,
  GET_PRIVACY_API,
  GET_PRIVACY_SUCCESS,
  GET_PRIVACY_ERROR,

  GET_TERMC_API,
  GET_TERMC_SUCCESS,
  GET_TERMC_ERROR,

  GET_DISCLAIMER_API,
  GET_DISCLAIMER_SUCCESS,
  GET_DISCLAIMER_ERROR,

  GET_CONTACT_API,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_ERROR,

  GET_CASE_STUDY_API,
  GET_CASE_STUDY_SUCCESS,
  GET_CASE_STUDY_ERROR,

  GET_ARTICLE_API,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_ERROR,

  
} from "../constants";

const getContent = (apiEndPoint, SUCESS, FAILED) => ( dispatch  ) => {
  console.log("API_ENDPOINT", API_ENDPOINT);
  return http.get(`${API_ENDPOINT}${apiEndPoint}`)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: SUCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: FAILED,
          payload: res.data,
        });
      }
    }).catch(err => {
      console.log("erroraction", err)
    })
}

const getTermCondContent = () => ( dispatch  ) => {
  return getContent(GET_TERMC_API, GET_TERMC_SUCCESS, GET_TERMC_ERROR)(dispatch);
}
const getDisclaimerContent = () => ( dispatch  ) => {
  return getContent(GET_DISCLAIMER_API, GET_DISCLAIMER_SUCCESS, GET_DISCLAIMER_ERROR)(dispatch);
}

const getContactContent = () => ( dispatch  ) => {
  return getContent(GET_CONTACT_API, GET_CONTACT_SUCCESS, GET_CONTACT_ERROR)(dispatch);
}
const getCaseStudyContent = () => ( dispatch  ) => {
  return getContent(GET_CASE_STUDY_API, GET_CASE_STUDY_SUCCESS, GET_CASE_STUDY_ERROR)(dispatch);
}

const getArticleContent = () => ( dispatch  ) => {
  return getContent(GET_ARTICLE_API, GET_ARTICLE_SUCCESS, GET_ARTICLE_ERROR)(dispatch);
}

const getArticleDetailContent = () => ( dispatch  ) => {
  return getContent(GET_ARTICLE_DETAILS_API, GET_ARTICLE_DETAILS_SUCCESS, GET_ARTICLE_DETAILS_ERROR)(dispatch);
}

export { 
  getTermCondContent,
  getDisclaimerContent,
  getContactContent,
  getCaseStudyContent,
  getArticleContent,
  
 }