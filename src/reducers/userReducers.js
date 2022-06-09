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


export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }

        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload,
                user: null
            }

        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:

            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
} 

export const userDataReducer = (state = { userdata: {} }, action) => {
    switch (action.type) {
        case USER_DATA_REQUEST:
            return {
                loading: true,
            }

        case USER_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                userdata: action.payload
            }

        case USER_DATA_FAIL:
            return {
                loading: false,
                error: action.payload,
                userdata: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
} 

