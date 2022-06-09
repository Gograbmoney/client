import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_FAIL,
    CLEAR_ERRORS
} from "..//constants/userConstant"

// to login user 

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST}) 

        const res= await fetch("https://server-gograbmoney.herokuapp.com/api/v1/signin", {
              method: "POST",
              credentials : "include",
              headers:{"Content-Type" : "application/json "},
              body: JSON.stringify({ email, password})
          })
          const data = await res.json()
          console.log(data)
          if(res.status === 200){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data   
            })
          }
          else{
            dispatch({
                type : LOGIN_FAIL,
                payload: data  
            })
          }
    } catch (error) {
        dispatch({
            type : LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// to register user

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_USER_REQUEST}) 

        const res = await fetch("https://server-gograbmoney.herokuapp.com/api/v1/register", {
            method: "POST",
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(userData)
          })
          const data = await res.json();

          if(res.status===200){
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: data
            })
          }
          else{
            dispatch({
                type : REGISTER_USER_FAIL,
                payload: data
            })
          }
          

    } catch (error) {
        dispatch({
            type : REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


// to load user

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({type: LOAD_USER_REQUEST}) 

        const res = await fetch("https://server-gograbmoney.herokuapp.com/api/v1/me", {
            method: "GET",
            credentials: "include",
            headers:{ "Content-Type": "application/json"},
          })
          const data = await res.json();
          dispatch({
              type: LOAD_USER_SUCCESS,
              payload: data.user
          })

    } catch (error) {
        dispatch({
            type : LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


//to Logout user

export const logout = () => async (dispatch) => {
    try {

         await fetch("https://server-gograbmoney.herokuapp.com/api/v1/logout", {
            method: "GET",
            credentials: "include",
            headers:{ "Content-Type": "application/json"},
          })
        //   const data = await res.json();

          dispatch({
              type: LOGOUT_SUCCESS
          })

    } catch (error) {
        dispatch({
            type : LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}


// user details 

export const userData = () => async (dispatch) => {
    try {
        dispatch({type: USER_DATA_REQUEST}) 

        const res = await fetch("https://server-gograbmoney.herokuapp.com/api/v1/me", {
            method: "GET",
            credentials: "include",
            headers:{ "Content-Type": "application/json"},
          })
          const data = await res.json();
          console.log(data)
          dispatch({
              type: USER_DATA_SUCCESS,
              payload: data.user
          })

    } catch (error) {
        dispatch({
            type : USER_DATA_FAIL,
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