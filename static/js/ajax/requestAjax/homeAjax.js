import api from "../api.js"
const http = uni.$u.http

export const postMenu = (params, config = {}) => http.post(api.index, params, config)

