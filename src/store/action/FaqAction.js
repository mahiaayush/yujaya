import {http, queryBuilder }from "../http";
import {
  API_ENDPOINT,
  GET_FAQ_API,
  GET_FAQ_SUCCESS,
  GET_FAQ_ERROR
} from "../constants";

const getFaqContent = (page = 0, limit = 50, search = null, order = null, sort = null) => ( dispatch  ) => {
  const query = queryBuilder({
    page,
    limit,
    search,
    order,
    sort
  });
  return http.get(`${API_ENDPOINT}${GET_FAQ_API}${query ? `?${query}` : ``}`)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_FAQ_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_FAQ_ERROR,
          payload: res.data,
        });
      }
    }).catch(err => {
      console.log("erroraction", err)
    })
}


export { getFaqContent }