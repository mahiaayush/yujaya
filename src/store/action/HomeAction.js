import {http, queryBuilder }from "../http";
import {
  API_ENDPOINT,
  GET_HOME_API,
  GET_HOME_SUCCESS,
  GET_HOME_ERROR
} from "../constants";
console.log("API_ENDPOINT", API_ENDPOINT);
const getHomeContent = (page = 0, limit = 50, search = null, order = null, sort = null) => ( dispatch  ) => {
  const query = queryBuilder({
    page,
    limit,
    search,
    order,
    sort
  });
  return http.get(`${API_ENDPOINT}${GET_HOME_API}${query ? `?${query}` : ``}`)
    .then((res) => {
      
      if (res.data.success) {
        dispatch({
          type: GET_HOME_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_HOME_ERROR,
          payload: res.data,
        });
      }
    }).catch(err => {
      console.log("erroraction", err)
    })
}


export { getHomeContent }