import {http, queryBuilder }from "../http";
import {
  API_ENDPOINT,
  GET_CASE_STUDY_DETAIL_API,
  GET_CASE_STUDY_DETAIL_SUCCESS,
  GET_CASE_STUDY_DETAIL_ERROR
} from "../constants";

const getCaseStudyDetailContent = (slug) => ( dispatch  ) => {
  const query = queryBuilder({
    slug
  });
  return http.get(`${API_ENDPOINT}${GET_CASE_STUDY_DETAIL_API}${query ? `?${query}` : ``}`)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_CASE_STUDY_DETAIL_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_CASE_STUDY_DETAIL_ERROR,
          payload: res.data,
        });
      }
    }).catch(err => {
      console.log("erroraction", err)
    })
}


export { getCaseStudyDetailContent }