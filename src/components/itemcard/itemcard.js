import React from 'react'
import './itemcard.css'
import Slider from 'react-slick'

const ItemCardSlider = (props) => {
    const { itemCardProps } = props;
    return (
        <div className='ic-card-container'>
            <div className='ic-card-heading-container'>
                <a href=''>{itemCardProps.cardHeadingText} </a>
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
    var { itemCardHeading, itemCardItemList } = props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        //autoplay: true,
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