import React from 'react'
import './offersdeals.css'
import Slider from 'react-slick'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../Loader'
const OffersSlider = (props) => {
    const navigate = useNavigate()
    const { differentdealsProps } = props;
    return (
        <div className='dd-card-container'>
            <div className='dd-card-content-bar' onClick={() => navigate(`/offer/${differentdealsProps._id}`)} >
                <div className='offer-logo'>
                    <img src={differentdealsProps["Image URL"]} className='merchant-image' alt='' />
                </div>
                <span className='offer-title'>{differentdealsProps.Title}</span>
                <span className='offer-cashback'>Upto {differentdealsProps.commision} Cashback</span>
            </div>
            <div className='dd-card-bottom-bar'>

                <Link to={`/offer/${differentdealsProps._id}`} >
                    <button>GRAB DEAL</button>
                </Link>
            </div>
        </div>
    );
}
const OffersDeals = (props) => {
    var { differentDealsHeading, differentDealsItemList, style, loading } = props;

    function SampleNextArrow({ onClick }) {
        return (<AiOutlineRight className="next-icon" onClick={onClick} />);
    }
    function SamplePrevArrow({ onClick }) {
        return (<AiOutlineLeft className="prev-icon" onClick={onClick} />);
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        // autoplay: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className='different-deals-heading-container'>
                <h1 className='different-deals-heading' style={style}>{differentDealsHeading}</h1>
                {/* <a href='' style={style}>VIEW ALL {'>>'}</a> */}
            </div>
            {
                loading ? <Loader /> : (
                    <div className='different-deals-container'>
                        <Slider {...settings}>
                            {
                                differentDealsItemList && differentDealsItemList.map(
                                    (eachItem, index) => <OffersSlider key={index} differentdealsProps={eachItem} />
                                )
                            }
                        </Slider>
                    </div>
                )
            }

        </div>
    )
}



export default OffersDeals