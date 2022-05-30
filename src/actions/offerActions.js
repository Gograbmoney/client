import {
    ALL_OFFER_REQUEST,
    ALL_OFFER_SUCCESS,
    ALL_OFFER_FAIL,
    OFFER_DETAILS_REQUEST,
    OFFER_DETAILS_SUCCESS,
    OFFER_DETAILS_FAIL,
    CLEAR_ERRORS
} from "..//constants/offerConstant"

export const getOffers = (currentPage = 1, keyword = '', category) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_OFFER_REQUEST
        })

        // spacial character replacement in url encoding
        keyword = keyword.replaceAll("%20", " ")
        keyword = keyword.replaceAll("%", "%25").replaceAll(" ", "%20").replaceAll("'", "%27").replace("&", "%26")

        let url = `https://server-gograbmoney.herokuapp.com/api/v1/offer?keyword=${keyword}&page=${currentPage}`

        if (category) {
            category = category.replace("&", "%26");
            // use of Categories instead of category
            url = `https://server-gograbmoney.herokuapp.com/api/v1/offer?keyword=${keyword}&page=${currentPage}&Categories=${category}`     
        }
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        dispatch({
            type: ALL_OFFER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_OFFER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getOfferDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: OFFER_DETAILS_REQUEST
        })

        const res = await fetch(`https://server-gograbmoney.herokuapp.com/api/v1/offer/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        console.log(data)
        dispatch({
            type: OFFER_DETAILS_SUCCESS,
            payload: data.offer
        })
    } catch (error) {
        dispatch({
            type: OFFER_DETAILS_FAIL,
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