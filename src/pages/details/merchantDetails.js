import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Metadata from '../../components/metadata';
import { getMerchantDetails, clearError } from "..//../actions/merchantActions"
import { Link, useParams } from "react-router-dom"
import "./merchantDetails.css"
import Loader from '../../components/Loader';

function MerchantDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, merchant } = useSelector(state => state.merchantDetails)
    const { user } = useSelector(state => state.user);

      
  

    useEffect(() => {
        dispatch(getMerchantDetails(id));
        if (error) {
            dispatch(clearError())
        }
    }, [dispatch, error, id])


    // When the user clicks on the button, open the modal
    function openModal() {
        let alertModelEl = document.getElementById("myMerchantAlertModal");
        alertModelEl.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    function closeModal() {
        let alertModelEl = document.getElementById("myMerchantAlertModal");
        alertModelEl.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
        let alertModelEl = document.getElementById("myMerchantAlertModal");
        if (event.target === alertModelEl) {
            alertModelEl.style.display = "none";
        }
    });

    
    
    return (
        <div >
            <Metadata title={merchant.merchant} />
            <div className="stores-body">
                {
                    loading ? <Loader /> : (
                        <div className="stores-container">
                            <div className="details-image-container">
                                <img src={merchant.image} alt="" className="details-image" />
                            </div>
                            <div className="details-about-container">
                                <h3 >Up to {merchant.commision} Gograbmoney Cashback on all {merchant.merchant} Orders</h3>
                                <p>Category : {merchant.category}</p>
                                {
                                    (merchant.campaignUrl != null &&  user) ? <a href={((merchant.campaignUrl).includes("?"))?merchant.campaignUrl + `&subid=${user._id}`:merchant.campaignUrl + `?subid=${user._id}`} target="_blank" rel="noreferrer" class="alert-modal-button">Earn {merchant.commision} Cashback Now {">>"}</a>
                                        :
                                        <button class="alert-modal-button" onClick={openModal}>Earn {merchant.commision} Cashback Now {">>"}</button>
                                }
                                {/* <!-- The Modal --> */}
                                <div id="myMerchantAlertModal" class="alert-modal">
                                    {/* <!-- Modal content --> */}
                                    <div class="modal-content-container ">
                                        <div className="modal-header-container">
                                            <span class="close" onClick={closeModal}>&times;</span>
                                        </div>
                                        <div class=" merchantDetailFinalModal-body-container">
                                            <h1>You are on final step to earn {merchant.commision} Cashback on your order</h1>
                                            <div class="merchantDetail-login-signup">
                                                <Link to="/register" style={{ backgroundColor: '#009933' }}>Sign Up</Link>
                                                <Link to="/login" style={{ backgroundColor: '#ff6600' }}>Already a member?Sign In</Link>
                                            </div>
                                            <a href={merchant.campaignUrl} className="merchant-final-link">Continue & Lose Cashback {">>"}</a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default MerchantDetails