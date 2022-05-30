import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
} from "..//constants/userConstant"

// to login user 

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST}) 

        const res= await fetch("https://gograbmoney-server.herokuapp.com/api/v1/signin", {
              method: "POST",
              credentials : "include",
              headers:{"Content-Type" : "application/json "},
              body: JSON.stringify({ email, password})
          })
          const data = await res.json()

          dispatch({
              type: LOGIN_SUCCESS,
              payload: data.user
          })

    } catch (error) {
        dispatch({
            type : LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// to clear error

export const clearError = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}