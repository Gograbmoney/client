import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Metadata from '../../components/metadata';
import { getMerchantDetails, clearError } from "..//../actions/merchantActions"
import { useParams } from "react-router-dom"
import "./merchantDetails.css"
import Loader from '../../components/Loader';


function MerchantDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, error, merchant } = useSelector(state => state.merchantDetails)

    useEffect(() => {
        dispatch(getMerchantDetails(id));
        if (error) {
            dispatch(clearError())
        }
    }, [dispatch, error, id])


    return (
        <div>
            <Metadata title={merchant.merchant} />
            <div className="stores-body">
                {
                    loading ? <Loader /> : (
                        <div className="stores-container">
                            <div className="details-image-container">
                                <img src={merchant.image} alt="" className="details-image" />
                            </div>
                            <div className="details-about-container">
                                <h3 >Up to {merchant.commision}% Gograbmoney Cashback on all {merchant.merchant} Orders</h3>
                                <p>Category : {merchant.category}</p>
                                <a href={merchant.campaignUrl}>Earn {merchant.commision}% Cashback Now {">>"}</a>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default MerchantDetails