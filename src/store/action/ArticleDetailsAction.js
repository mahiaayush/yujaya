import {http, queryBuilder }from "../http";
import {
  API_ENDPOINT,
  GET_ARTICLE_DETAILS_API,
  GET_ARTICLE_DETAILS_SUCCESS,
  GET_ARTICLE_DETAILS_ERROR,
} from "../constants";

const getArticleDetailContent = (slug) => ( dispatch  ) => {
  const query = queryBuilder({
    slug
  });
  return http.get(`${API_ENDPOINT}${GET_ARTICLE_DETAILS_API}${query ? `?${query}` : ``}`)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_ARTICLE_DETAILS_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_ARTICLE_DETAILS_ERROR,
          payload: res.data,
        });
      }
    }).catch(err => {
      console.log("erroraction", err)
    })
}


export { getArticleDetailContent }