import React from 'react'
import './carousal.css'
import Slider from 'react-slick'

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
            <img src={carousalProps.carousalListItem} className='slider-image' alt=''/>
        </div>
    );
}
const Carousal = () => {
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
        <Slider {...settings}>
            {
                carousalList.map(
                    (eachItem, index) => <CarousalSlider key={index} carousalProps={eachItem} />
                )
            }
        </Slider>
    )
}

export default Carousal