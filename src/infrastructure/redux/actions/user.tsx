// import { GET_USERS, SET_LOGGED, LOG_OUT } from '../constants'
// import axios from 'axios'


// export const getUsers = (token) => async (dispatch) => {
//   console.log(token, 'TOKEN ')
//   const headers = { nToken: token }
//   const users = await axios.get(`${ApiURL}/admin`, headers)
//   return dispatch({
//     type: GET_USERS,
//     payload: users.data
//   })
// }


export const GET_USER = "[user] get"
export const CREATE_USER = "[user] create"
export const UPDATE_USER = "[user] update"

