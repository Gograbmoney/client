import React from 'react'
import './topcategories.css'
import Slider from 'react-slick'
import category3 from '..//..//image/category-3.jpg'
import category4 from '..//..//image/category-4.jpg'
import category5 from '..//..//image/category-5.jpg'
import category6 from '..//..//image/category-6.jpg'
import category7 from '..//..//image/category-7.jpg'
import category8 from '..//..//image/category-8.jpg'
const topCategoryList = [
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/fashion-offers-4199-1632913566.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/electronics-offers-4205-1632913847.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/beauty-personal-care-offers-4206-1632913581.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/grocery-offers-4208-1632913590.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/health-medicine-offers-4203-1632913602.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/home-kitchen-offers-4209-1632913774.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/mobiles-phones-offers-4200-1632913640.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/food-delivery-offers-4201-1632913687.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/recharge-bill-payments-offers-4202-1632913627.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/education-offers-4445-1632913791.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/departmental-offers-4204-1632913809.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/travel-offers-4207-1632913821.png"
    },
    {
        topCategoryListItem: "https://asset20.ckassets.com/resources/image/category/domain-hosting-offers-4686-1632913835.png"
    }
];

const TopCategorySlider = (props) => {
    const { topCategoryProps } = props;
    return (
        <div className='tc-card-container'>
            <img src={topCategoryProps.topCategoryListItem} className='tc-slider-image' alt='' />
        </div>
    );
}
const TopCategories = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
            <h1 className='top-categories-heading'>TOP CATEGORIES</h1>
            <div className='top-categories-container'>
                <Slider {...settings}>
                    {
                        topCategoryList.map(
                            (eachItem, index) => <TopCategorySlider key={index} topCategoryProps={eachItem} />
                        )
                    }
                </Slider>
            </div>
            <div className='category'>
                <div className='category-row'>
                    <div className="category-item ch-400">
                        <img src={category3} />
                        <a className="category-name" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                </div>
                <div className='category-row'>
                    <div className="category-item ch-250">
                        <img src={category4} />
                        <a className="category-name" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                    <div className="category-item ch-150">
                        <img src={category5} />
                        <a className="category-name" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                </div>
                <div className='category-row'>
                    <div className="category-item ch-150">
                        <img src={category6} />
                        <a className="category-name" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                    <div className="category-item ch-250">
                        <img src={category7} />
                        <a className="category-name" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                </div>
                <div className='category-row'>
                    <div className="category-item ch-400">
                        <img src={category8} />
                        <a className="category-name" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCategories