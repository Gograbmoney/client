import React from 'react'
import './topcategories.css'
import Slider from 'react-slick'
import category3 from '..//..//image/category-3.jpg'
import category4 from '..//..//image/category-4.jpg'
import category5 from '..//..//image/category-5.jpg'
import category6 from '..//..//image/category-6.jpg'
import category7 from '..//..//image/category-7.jpg'
import category8 from '..//..//image/category-8.jpg'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { GiLoincloth, GiWashingMachine, GiDramaMasks, GiShoppingBag, GiMedicines, GiHomeGarage, GiSmartphone, GiCommercialAirplane, GiEarthAmerica } from "react-icons/gi"
import { IoFastFoodOutline, IoBookSharp } from "react-icons/io5"
import { CgFileDocument } from "react-icons/cg"
import { BsFillBasket2Fill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const topCategoryList = [
    {
        topCategoryName: "FAISHON",
        category :"Fashion",
        topCategoryIcon: <GiLoincloth className='top-category-icons' />

    },
    {
        topCategoryName: "ELECTRONICS",
        category :"Electronics",
        topCategoryIcon: <GiWashingMachine className='top-category-icons' />
    },
    {
        topCategoryName: "BEAUTY",
        category :"Health & Beauty",
        topCategoryIcon: <GiDramaMasks className='top-category-icons' />
    },
    {
        topCategoryName: "GROCERY",
        category :"Food & Grocery",
        topCategoryIcon: <GiShoppingBag className='top-category-icons' />
    },
    {
        topCategoryName: "PHARMACY",
        category :"Health & Beauty",
        topCategoryIcon: <GiMedicines className='top-category-icons' />
    },
    {
        topCategoryName: "HOME",
        category :"Home & Kitchen",
        topCategoryIcon: <GiHomeGarage className='top-category-icons' />
    },
    {
        topCategoryName: "MOBILES",
        category :"Electronics",
        topCategoryIcon: <GiSmartphone className='top-category-icons' />
    },
    {
        topCategoryName: "FOOD DELIVERY",
        category :"Food & Grocery",
        topCategoryIcon: <IoFastFoodOutline className='top-category-icons' />
    },
    {
        topCategoryName: "RECHARGE & BILL",
        category :"Recharge",
        topCategoryIcon: <CgFileDocument className='top-category-icons' />
    },
    {
        topCategoryName: "EDUCATION",
        category :"Books",
        topCategoryIcon: <IoBookSharp className='top-category-icons' />
    },
    {
        topCategoryName: "DEPARTMENT",
        category :"",
        topCategoryIcon: <BsFillBasket2Fill className='top-category-icons' />
    },
    {
        topCategoryName: "TRAVEL",
        category :"Travel",
        topCategoryIcon: <GiCommercialAirplane className='top-category-icons' />
    },
    {
        topCategoryName: "HOSTING",
        category :"",
        topCategoryIcon: <GiEarthAmerica className='top-category-icons' />
    }
];

const TopCategorySlider = (props) => {
    const navigate = useNavigate();
    const { topCategoryProps } = props;
    const navigateToCategory = () => {
        if (topCategoryProps.category) {
            navigate(`/category/${topCategoryProps.category}`);
        }
        else {
            navigate("/");
        }
    }
    return (
        <div className='tc-card-container' style={{ cursor: 'pointer' }} onClick={navigateToCategory}>
            {/* <img src={topCategoryProps.topCategoryListItem} className='tc-slider-image' alt='' /> */}
            <span>{topCategoryProps.topCategoryName}</span>
            {topCategoryProps.topCategoryIcon}
        </div>
    );
}

const TopCategories = () => {
    const navigate = useNavigate();
    function SampleNextArrow({ onClick }) {
        return (<AiOutlineRight className="tc-next-icon" onClick={onClick} />);
    }
    function SamplePrevArrow({ onClick }) {
        return (<AiOutlineLeft className="tc-prev-icon" onClick={onClick} />);
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
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
                <div className='category-row '>
                    <div className="category-item ch-400" onClick={()=>navigate("/category/Fashion")}>
                        <img src={category3} />
                        <a className="category-name" href="">
                            <p>FASHION</p>
                        </a>
                    </div>
                </div>
                <div className='category-row '>
                    <div className="category-item ch-250" onClick={()=>navigate("/category/Health & Beauty")}>
                        <img src={category4} />
                        <a className="category-name" href="">
                            <p>BEAUTY</p>
                        </a>
                    </div>
                    <div className="category-item ch-150" onClick={()=>navigate("/category/Home & Kitchen")}>
                        <img src={category5} />
                        <a className="category-name" href="" >
                            <p>HOME</p>
                        </a>
                    </div>
                </div>
                <div className='category-row '>
                    <div className="category-item ch-150" onClick={()=>navigate("/category/Food & Grocery")}>
                        <img src={category6} />
                        <a className="category-name" href="" >
                            <p>GROCERY</p>
                        </a>
                    </div>
                    <div className="category-item ch-250" onClick={()=>navigate("/category/Electronics")}>
                        <img src={category7} />
                        <a className="category-name" href="">
                            <p>ELECTRONICS</p>
                        </a>
                    </div>
                </div>
                <div className='category-row '>
                    <div className="category-item ch-400 " onClick={()=>navigate("/category/Fashion")}>
                        <img src={category8} />
                        <a className="category-name" href="">
                            <p>FAISHON</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCategories