import {
    ALL_OFFER_REQUEST,
    ALL_OFFER_SUCCESS,
    ALL_OFFER_FAIL,
    OFFER_DETAILS_REQUEST,
    OFFER_DETAILS_SUCCESS,
    OFFER_DETAILS_FAIL,
    CLEAR_ERRORS
} from "..//constants/offerConstant"
export const offerReducer = (state = { offer: [] }, action) => {
    switch (action.type) {
        case ALL_OFFER_REQUEST:
            return {
                loading: true,
                offer: []
            }

        case ALL_OFFER_SUCCESS:
            return {
                loading: false,
                offer: action.payload.offer,
                offerCount: action.payload.offerCount,
                resPerPage : action.payload.resPerPage
            }
        case ALL_OFFER_FAIL:
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

export const offerDetailsReducer = (state = { offer :{} },action)=>{
     switch(action.type){
        case OFFER_DETAILS_REQUEST :
            return {
                ...state, 
                loading : true
            }
        case OFFER_DETAILS_SUCCESS :{
            return {
                loading : false,
                offer : action.payload
            }
        }    
        case OFFER_DETAILS_FAIL :{
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