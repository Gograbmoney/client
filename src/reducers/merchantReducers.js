import {
    ALL_MERCHANT_REQUEST,
    ALL_MERCHANT_SUCCESS,
    ALL_MERCHANT_FAIL,
    MERCHANT_DETAILS_REQUEST,
    MERCHANT_DETAILS_SUCCESS,
    MERCHANT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "..//constants/merchantConstant"
export const merchantReducer = (state = { merchant: [] }, action) => {
    switch (action.type) {
        case ALL_MERCHANT_REQUEST:
            return {
                loading: true,
                merchant: []
            }

        case ALL_MERCHANT_SUCCESS:
            return {
                loading: false,
                merchant: action.payload.merchant,
                merchantCount: action.payload.merchantCount,
                resPerPage : action.payload.resPerPage
            }
        case ALL_MERCHANT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const merchantDetailsReducer = (state = { merchant :{} },action)=>{
     switch(action.type){
        case MERCHANT_DETAILS_REQUEST :
            return {
                ...state, 
                loading : true
            }
        case MERCHANT_DETAILS_SUCCESS :{
            return {
                loading : false,
                merchant : action.payload
            }
        }    
        case MERCHANT_DETAILS_FAIL :{
            return {
                ...state,
                error: action.payload
            }
        }
        case CLEAR_ERRORS :{
            return {
                ...state,
                error:null
            }
        }
        default:
            return state
     }
}