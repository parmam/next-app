// import { LOGIN_USER, GET_USERS, SET_LOGGED, LOG_OUT } from '../constants'

// const initialState = {
//   user: {},
//   users: [],
//   logged: false

// }

// const user = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_USER:
//       return {
//         ...state,
//         user: state
//       }
//     case GET_USERS:
//       return {
//         ...state,
//         users: action.payload
//       }
//     case SET_LOGGED:
//       return { ...state, logged: action.payload }
//     case LOG_OUT:
//       return { ...state, logged: false }
//     default:
//       return state
//   }
// }

// export default user


import {GET_USER} from '../actions/user'

const initialState = {
    user: {},
    users: [],
}

const user = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default user