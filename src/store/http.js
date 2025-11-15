import axios from 'axios';

const http = axios.create({
    timeout: 30000,
});

// http.interceptors.request.use(async (config) => {
//     // const token = (await Auth.currentSession()).getAccessToken().getJwtToken()
//     // if (token) {
//     //     config.headers.Authorization = `Bearer ${token}`
//     // }
//     return config
// })

const queryBuilder = (obj = {}) => {
  if (obj?.search) {
     obj.search = encodeURIComponent(obj.search)
  }
  return Object.keys(obj)
    .filter((key) => !!obj[key])
    .map((key) => `${key}=${obj[key]}`)
    .join('&')
}

export {http, queryBuilder}; ;