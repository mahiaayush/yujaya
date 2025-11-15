import {http, queryBuilder }from "../http";
import {
  API_ENDPOINT,
  GET_PRIVACY_API,
  GET_PRIVACY_SUCCESS,
  GET_PRIVACY_ERROR
} from "../constants";

const getPrivacyContent = (page = 0, limit = 50, search = null, order = null, sort = null) => ( dispatch  ) => {
  const query = queryBuilder({
    page,
    limit,
    search,
    order,
    sort
  });
  return http.get(`${API_ENDPOINT}${GET_PRIVACY_API}${query ? `?${query}` : ``}`)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_PRIVACY_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_PRIVACY_ERROR,
          payload: res.data,
        });
      }
    }).catch(err => {
      console.log("erroraction", err)
    })
}


export { getPrivacyContent }