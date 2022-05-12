import React from 'react'
import './flashdeals.css'
import Slider from 'react-slick'
const flashDealsItemList = [
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/3-flash%20deal-21-03-22%20(1)-1647850913.jpg",
        flashDealsItemTimer : "01:26:59"

    },
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/2%20flash%20deal-09-03-22-1646805096.jpg",
        flashDealsItemTimer : "01:22:59"
    },
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/6-flash%20deal-21-03-22%20(1)amla-1647860083.png",
        flashDealsItemTimer : "00:26:19"
    },
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/1-flash%20deal-21-03-22%20(1)razor-1647859942.png",
        flashDealsItemTimer : "01:26:59"
    },
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/7-flash%20deal-21-03-22%20(1)zepto-1647861617.png",
        flashDealsItemTimer : "02:20:29"
    },
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/4-flash%20deal-21-03-22%20(2)lamp-1647860019.png",
        flashDealsItemTimer : "01:16:24"
    },
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/2-flash%20deal-21-03-22%20(1)%20(1)mcaff-1647859970.png",
        flashDealsItemTimer : "04:22:44"
    },
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/5-flash%20deal-21-03-22%20(2)lacto-1647860055.png",
        flashDealsItemTimer : "02:42:13"
    },
    {
        flashDealsItem : "https://asset22.ckassets.com/resources/image/staticpage_images/8-flash%20deal-21-03-22%20(1)aftershave-1647860102.png",
        flashDealsItemTimer : "03:21:34"
    }
];

const FlashDealsSlider = (props) => {
    const { flashdealsProps } = props;
    return (
        <div className='fd-card-container'>
            <img src={flashdealsProps.flashDealsItem} className='fd-slider-image' alt='' />
            <div className='fd-card-bottom-bar'>
                <span>{flashdealsProps.flashDealsItemTimer}</span>
                <button>GRAB DEAL</button>
            </div>
        </div>
    );
}
const FlashDeals = () => {
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
            <div className='flash-deals-heading-container'>
            <h1 className='flash-deals-heading'>FLASH DEALS - LIVE NOW</h1>
            <a href=''>VIEW ALL {'>>'}</a>
            </div>
            <div className='flash-deals-container'>
                <Slider {...settings}>
                    {
                        flashDealsItemList.map(
                            (eachItem, index) => <FlashDealsSlider key={index} flashdealsProps={eachItem} />
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}



export default FlashDeals