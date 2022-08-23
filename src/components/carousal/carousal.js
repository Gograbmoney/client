import { React, useState, useEffect } from 'react'
import './carousal.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Loader from '../Loader';

const carousalList = [
    {
        carousalListItem: "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider7-1647542283.png"
    },
    {
        carousalListItem: "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider1-1647497975.png"
    },
    {
        carousalListItem: "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider2-1647542283.png"
    },
    {
        carousalListItem: "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider3-1647337688.png"
    },
    {
        carousalListItem: "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider4-1647520316.png"
    },
    {
        carousalListItem: "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider4-1647494649.png"
    },
    {
        carousalListItem: "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider5-1647412369.png"
    }
];

const CarousalSlider = (props) => {
    const { carousalProps } = props;
    return (
        <div>
            <Link to={`/offer/${carousalProps._id}`} >
                <img src={carousalProps.carousal_image} className='slider-image' alt='' />
            </Link>
        </div>
    );
}


const Carousal = (props) => {

    const { offer, loading } = props;


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <div>
            {
                loading ? <Loader /> : (
                    <Slider {...settings}>
                        {
                           offer && offer.map(
                                (eachItem, index) => (eachItem.carousal===1)?<CarousalSlider key={index} carousalProps={eachItem} />:null
                            )
                        }
                    </Slider>
                )
            }

        </div>

    )
}

export default Carousal