import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Metadata from '../../components/metadata';
import { getOfferDetails, clearError } from "..//../actions/offerActions"
import { useParams } from "react-router-dom"
import "./merchantDetails.css"
import Loader from '../../components/Loader';


function OfferDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, error, offer } = useSelector(state => state.offerDetails)

    useEffect(() => {
        dispatch(getOfferDetails(id));
        if (error) {
            dispatch(clearError())
        }
    }, [dispatch, error, id])

    return (
        <div style={{height: "100vh"}}>
            <Metadata title={offer.Title} />
            <div className="stores-body">
                {
                    loading ? <Loader /> : (
                        <div className="stores-container">
                            <div className="details-image-container">
                                <img src={offer["Image URL"]} alt="" className="details-image" />
                            </div>
                            <div className="details-about-container">
                                <h2 >{offer.Title}</h2>
                                <h3 >Up to {offer.commision}% Gograbmoney Cashback on all {offer.merchant} Orders</h3>
                                <p>Category : {offer.Categories}</p>
                                <a href={offer.URL}>Earn {offer.commision}% Cashback Now {">>"}</a>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default OfferDetails