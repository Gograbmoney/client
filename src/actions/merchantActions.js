import {
    ALL_MERCHANT_REQUEST,
    ALL_MERCHANT_SUCCESS,
    ALL_MERCHANT_FAIL,
    MERCHANT_DETAILS_REQUEST,
    MERCHANT_DETAILS_SUCCESS,
    MERCHANT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "..//constants/merchantConstant"

export const getMerchants = (currentPage = 1,keyword = '',category) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_MERCHANT_REQUEST
        })
        let url = `https://gograbmoney-server.herokuapp.com/api/v1/merchant?keyword=${keyword}&page=${currentPage}`

        if(category){
            category = category.replace("&","%26");
            url = `https://gograbmoney-server.herokuapp.com/api/v1/merchant?keyword=${keyword}&page=${currentPage}&category=${category}`
        }
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        dispatch({
            type: ALL_MERCHANT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_MERCHANT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getMerchantDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: MERCHANT_DETAILS_REQUEST
        })

        const res = await fetch(`https://gograbmoney-server.herokuapp.com/api/v1/merchant/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        console.log(data)
        dispatch({
            type: MERCHANT_DETAILS_SUCCESS,
            payload: data.merchant
        })
    } catch (error) {
        dispatch({
            type: MERCHANT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// to  CLEAR_ERRORS

export const clearError = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}