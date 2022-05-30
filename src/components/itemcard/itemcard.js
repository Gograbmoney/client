import React from 'react'
import './itemcard.css'
import Slider from 'react-slick'
import {AiOutlineLeft ,AiOutlineRight} from "react-icons/ai"
const ItemCardSlider = (props) => {
    const { itemCardProps } = props;
    return (
        <div className='ic-card-container'>
            <div className='ic-card-heading-container'>
                <img src={itemCardProps.cardHeadingImage} alt='' className='ic-heading-image' />
            </div>
            <div className='ic-card-product-container'>
                <div className='image-brand-container'>
                    <img src={itemCardProps.productImage} alt='' className='ic-product-image' />
                    <p>Brand:<span>{itemCardProps.brand}</span></p>
                </div>
                <span className='ic-card-product-name'>
                    {itemCardProps.productName}
                </span>
                <div className='change-in-value'>
                    <span className='ic-value'>₹{itemCardProps.value}</span>
                    <span className='ic-off-value'>₹{itemCardProps.offValue}</span>
                    <span className='ic-percentage-off'>({itemCardProps.percentageOff}% Off)</span>
                </div>
                <span className='ic-card-cashback-value'>+₹{itemCardProps.cashBackValue} Cashback</span>
                <span className='ic-final-price'>Final Price ₹{itemCardProps.finalValue}</span>
            </div>
        </div>
    );
}
const ItemCard = (props) => {
      function SampleNextArrow({onClick}) {
        return (<AiOutlineRight className="next-icon" onClick={onClick}/>); 
      }
      function SamplePrevArrow({onClick}) {
        return (<AiOutlineLeft className="prev-icon" onClick={onClick}/>); 
      }
    

    var { itemCardHeading, itemCardItemList } = props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow />,
        //autoplay: true,
        responsive: [
           
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };
    return (
        <div>
            <div className='item-card-heading-container'>
                <h1 className='item-card-heading'>{itemCardHeading}</h1>
                <a href='' >VIEW ALL {'>>'}</a>
            </div>
            <div className='item-card-container'>
                <Slider {...settings}>
                    {
                        itemCardItemList.map(
                            (eachItem, index) => <ItemCardSlider key={index} itemCardProps={eachItem} />
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}



export default ItemCard