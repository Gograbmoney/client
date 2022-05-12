import React from 'react'
import './differentdeals.css'
import Slider from 'react-slick'

const DifferentDealsSlider = (props) => {
    const { differentdealsProps } = props;
    return (
        <div className='dd-card-container'>
            <img src={differentdealsProps.differentDealsItem} className='dd-slider-image' alt='' />
            <div className='dd-card-bottom-bar'>
                <button>GRAB DEAL</button>
            </div>
        </div>
    );
}
const DifferentDeals = (props) => {
    var {differentDealsHeading , differentDealsItemList,style} = props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
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
            <div className='different-deals-heading-container'>
            <h1 className='different-deals-heading' style={style}>{differentDealsHeading}</h1>
            <a href='' style={style}>VIEW ALL {'>>'}</a>
            </div>
            <div className='different-deals-container'>
                <Slider {...settings}>
                    {
                        differentDealsItemList.map(
                            (eachItem, index) => <DifferentDealsSlider key={index} differentdealsProps={eachItem} />
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}



export default DifferentDeals