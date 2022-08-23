import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Metadata from '../../components/metadata';
import { getOfferDetails, clearError } from "..//../actions/offerActions"
import { useParams ,Link } from "react-router-dom"
import "./merchantDetails.css"
import Loader from '../../components/Loader';


function OfferDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, error, offer } = useSelector(state => state.offerDetails)
    const { user } = useSelector(state => state.user);
    useEffect(() => {
        dispatch(getOfferDetails(id));
        if (error) {
            dispatch(clearError())
        }
    }, [dispatch, error, id])



    // When the user clicks on the button, open the modal
    function openModal() {
        let alertModelEl = document.getElementById("myOfferAlertModal");
        alertModelEl.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    function closeModal() {
        let alertModelEl = document.getElementById("myOfferAlertModal");
        alertModelEl.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
        let alertModelEl = document.getElementById("myOfferAlertModal");
        if (event.target === alertModelEl) {
            alertModelEl.style.display = "none";
        }
    });

    return (
        <div >
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
                                <h3 >Up to {offer.commision} Gograbmoney Cashback on all {offer.merchant} Orders</h3>
                                <p>Category : {offer.Categories}</p>
                                {
                                   (offer.URL != null &&  user)  ? <a href={((offer.URL).includes("?"))?offer.URL + `&subid=${user._id}`:offer.URL + `?subid=${user._id}`} target="_blank" rel="noreferrer" class="alert-modal-button">Earn {offer.commision} Cashback Now {">>"}</a>
                                        :
                                        <button class="alert-modal-button" onClick={openModal}>Earn {offer.commision} Cashback Now {">>"}</button>
                                }
                                {/* <!-- The Modal --> */}
                                <div id="myOfferAlertModal" class="alert-modal">
                                    {/* <!-- Modal content --> */}
                                    <div class="modal-content-container ">
                                        <div className="modal-header-container">
                                            <span class="close" onClick={closeModal}>&times;</span>
                                        </div>
                                        <div class=" merchantDetailFinalModal-body-container">
                                            <h1>You are on final step to earn {offer.commision} Cashback on your order</h1>
                                            <div class="merchantDetail-login-signup">
                                                <Link to="/register" style={{ backgroundColor: '#009933' }}>Sign Up</Link>
                                                <Link to="/login" style={{ backgroundColor: '#ff6600' }}>Already a member?Sign In</Link>
                                            </div>
                                            <a href={offer.URL} className="merchant-final-link">Continue & Lose Cashback {">>"}</a>
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

export default OfferDetails