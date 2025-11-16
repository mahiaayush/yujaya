import {http, queryBuilder }from "../http";
import {
  API_ENDPOINT,
  GET_ABOUT_US_API,
  GET_ABOUT_US_SUCCESS,
  GET_ABOUT_US_ERROR
} from "../constants";

const getAboutUsContent = (page = 0, limit = 50, search = null, order = null, sort = null) => ( dispatch  ) => {
  const query = queryBuilder({
    page,
    limit,
    search,
    order,
    sort
  });
  return http.get(`${API_ENDPOINT}${GET_ABOUT_US_API}${query ? `?${query}` : ``}`)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_ABOUT_US_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_ABOUT_US_ERROR,
          payload: res.data,
        });
      }
    }).catch(err => {
      console.log("erroraction", err)
    })
}


export { getAboutUsContent }