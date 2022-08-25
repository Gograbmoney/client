import React, { useEffect } from "react";
import Slider from 'react-slick'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getMerchants } from '../../actions/merchantActions';
import Loader from '../Loader';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import "..//..//pages/stores/stores.css"
import "./topmerchants.css"


const StoresCard = (props) => {
    const { eachItemProps } = props;
    return (
        <div className="top-merchant-card">
            <div className="top-merchant-image-container">
                <Link to={`/stores/${eachItemProps._id}`} >
                    <img src={eachItemProps.image} alt="" className="top-merchant-image" />
                </Link>
            </div>
            <span>{eachItemProps.merchant}</span>
            <Link to={`/stores/${eachItemProps._id}`} className="top-merchant-details-link">
                Upto {eachItemProps.commision} Cashback
            </Link>
        </div>
    );
};


const TopStores = () => {
    const dispatch = useDispatch();
    const { loading, merchant, topmerchants } = useSelector(state => state.merchant);

    useEffect(() => {
        dispatch(getMerchants());
    }, [dispatch])

    function SampleNextArrow({ onClick }) {
        return (<AiOutlineRight className="ts-next-icon" onClick={onClick} />);
    }
    function SamplePrevArrow({ onClick }) {
        return (<AiOutlineLeft className="ts-prev-icon" onClick={onClick} />);
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        rows: 2,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        // autoplay: true,
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
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <h1 className='top-categories-heading'>TOP STORES</h1>
            {
                loading ? <Loader /> : (
                    <div className='top-stores-container'>
                        <Slider {...settings}>
                            {topmerchants && topmerchants.map((eachItem) => (
                                (eachItem.top_store === 1) ? <StoresCard key={eachItem._id} eachItemProps={eachItem} /> : null
                            ))}
                        </Slider>
                    </div>
                )
            }

        </div >
    )
}

export default TopStores