import Carousal from "../../components/carousal/carousal";
import TopCategories from "../../components/topcategories/topcategories";
import "../../App.css";
import FlashDeals from "../../components/flashdeals/flashdeals";
import OffersDeals from "../../components/offersdeals/offersdeals";
import ItemCard from "../../components/itemcard/itemcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Metadata from "../../components/metadata";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getOffers } from "../../actions/offerActions";

const topMobileItemList = [
  {
    cardHeadingText: "Price Compared (2 Seller)",
    cardHeadingImage: "",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000155_1-1635499745.jpg",
    brand: "Redmi",
    productName: "Redmi 10 Prime (64 GB / 128 GB Storage | 4 GB / 6 GB RAM)",
    value: 14999,
    offValue: 12999,
    percentageOff: 13,
    cashBackValue: 65,
    finalValue: 12934,
  },
  {
    cardHeadingText: "",
    cardHeadingImage:
      "https://asset20.ckassets.com/resources/image/stores/amazon-mobiles-3-1632904401.png",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000154_1-1634130091.jpg",
    brand: "Realme",
    productName: "realme narzo 50i (32 GB / 64 GB Storage | 2 GB / 4 GB RAM)",
    value: 7999,
    offValue: 7499,
    percentageOff: 6,
    cashBackValue: 19,
    finalValue: 7480,
  },
  {
    cardHeadingText: "",
    cardHeadingImage:
      "https://asset20.ckassets.com/resources/image/stores/amazon-mobiles-3-1632904401.png",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000155_1-1635499745.jpg",
    brand: "Redmi",
    productName: "Redmi 10 Prime (64 GB / 128 GB Storage | 4 GB / 6 GB RAM)",
    value: 14999,
    offValue: 12999,
    percentageOff: 13,
    cashBackValue: 65,
    finalValue: 12934,
  },
  {
    cardHeadingText: "Price Compared (2 Seller)",
    cardHeadingImage: "",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000155_1-1635499745.jpg",
    brand: "Redmi",
    productName: "Redmi 10 Prime (64 GB / 128 GB Storage | 4 GB / 6 GB RAM)",
    value: 14999,
    offValue: 12999,
    percentageOff: 13,
    cashBackValue: 65,
    finalValue: 12934,
  },
  {
    cardHeadingText: "",
    cardHeadingImage:
      "https://asset20.ckassets.com/resources/image/stores/amazon-mobiles-3-1632904401.png",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000154_1-1634130091.jpg",
    brand: "Realme",
    productName: "realme narzo 50i (32 GB / 64 GB Storage | 2 GB / 4 GB RAM)",
    value: 7999,
    offValue: 7499,
    percentageOff: 6,
    cashBackValue: 19,
    finalValue: 7480,
  },
  {
    cardHeadingText: "",
    cardHeadingImage:
      "https://asset20.ckassets.com/resources/image/stores/amazon-mobiles-3-1632904401.png",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000155_1-1635499745.jpg",
    brand: "Redmi",
    productName: "Redmi 10 Prime (64 GB / 128 GB Storage | 4 GB / 6 GB RAM)",
    value: 14999,
    offValue: 12999,
    percentageOff: 13,
    cashBackValue: 65,
    finalValue: 12934,
  },
  {
    cardHeadingText: "Price Compared (2 Seller)",
    cardHeadingImage: "",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000155_1-1635499745.jpg",
    brand: "Redmi",
    productName: "Redmi 10 Prime (64 GB / 128 GB Storage | 4 GB / 6 GB RAM)",
    value: 14999,
    offValue: 12999,
    percentageOff: 13,
    cashBackValue: 65,
    finalValue: 12934,
  },
  {
    cardHeadingText: "",
    cardHeadingImage:
      "https://asset20.ckassets.com/resources/image/stores/amazon-mobiles-3-1632904401.png",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000154_1-1634130091.jpg",
    brand: "Realme",
    productName: "realme narzo 50i (32 GB / 64 GB Storage | 2 GB / 4 GB RAM)",
    value: 7999,
    offValue: 7499,
    percentageOff: 6,
    cashBackValue: 19,
    finalValue: 7480,
  },
  {
    cardHeadingText: "",
    cardHeadingImage:
      "https://asset20.ckassets.com/resources/image/stores/amazon-mobiles-3-1632904401.png",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000155_1-1635499745.jpg",
    brand: "Redmi",
    productName: "Redmi 10 Prime (64 GB / 128 GB Storage | 4 GB / 6 GB RAM)",
    value: 14999,
    offValue: 12999,
    percentageOff: 13,
    cashBackValue: 65,
    finalValue: 12934,
  },
  {
    cardHeadingText: "Price Compared (2 Seller)",
    cardHeadingImage: "",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000155_1-1635499745.jpg",
    brand: "Redmi",
    productName: "Redmi 10 Prime (64 GB / 128 GB Storage | 4 GB / 6 GB RAM)",
    value: 14999,
    offValue: 12999,
    percentageOff: 13,
    cashBackValue: 65,
    finalValue: 12934,
  },
  {
    cardHeadingText: "",
    cardHeadingImage:
      "https://asset20.ckassets.com/resources/image/stores/amazon-mobiles-3-1632904401.png",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000154_1-1634130091.jpg",
    brand: "Realme",
    productName: "realme narzo 50i (32 GB / 64 GB Storage | 2 GB / 4 GB RAM)",
    value: 7999,
    offValue: 7499,
    percentageOff: 6,
    cashBackValue: 19,
    finalValue: 7480,
  },
  {
    cardHeadingText: "",
    cardHeadingImage:
      "https://asset20.ckassets.com/resources/image/stores/amazon-mobiles-3-1632904401.png",
    productImage:
      "https://asset22.ckassets.com/resources/image/ckseller/CKS-Mobiles-000155_1-1635499745.jpg",
    brand: "Redmi",
    productName: "Redmi 10 Prime (64 GB / 128 GB Storage | 4 GB / 6 GB RAM)",
    value: 14999,
    offValue: 12999,
    percentageOff: 13,
    cashBackValue: 65,
    finalValue: 12934,
  },
];
const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, error, offer, offerCount, resPerPage } = useSelector(state => state.offer);

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch])

  const fashionOffers = [];
  const electronicsOffers = [];
  const healthAndBeautyOffers = [];
  const homeAndKitchenOffers = [];
  const otherOffers = [];
  offer.map((offerItem) => (offerItem.Categories === "Fashion") ? fashionOffers.push(offerItem) : null);
  offer.map((offerItem) => (offerItem.Categories === "Electronics") ? electronicsOffers.push(offerItem) : null);
  offer.map((offerItem) => (offerItem.Categories === "Health & Beauty") ? healthAndBeautyOffers.push(offerItem) : null);
  offer.map((offerItem) => (offerItem.Categories === "Home & Kitchen") ? homeAndKitchenOffers.push(offerItem) : null);
  offer.map((offerItem) => ((offerItem.Categories === "Baby & Kids") || (offerItem.Categories === "Books") ||
    (offerItem.Categories === "Finance") || (offerItem.Categories === "Flowers & Gifts") || (offerItem.Categories === "Gaming") ||
    (offerItem.Categories === "Others") || (offerItem.Categories === "Recharge") ||
    (offerItem.Categories === "Services") || (offerItem.Categories === "Travel") || (offerItem.Categories === "Food & Grocery"))
    ? otherOffers.push(offerItem) : null);

  return (
    <div>
      <Metadata title="Best offers & Cashback Deals" />
      <div className="content-body">
        <Carousal />
        <TopCategories />
        {/* <FlashDeals /> */}
        <div className="different-deals-bg1">
          <OffersDeals
            differentDealsHeading={"FASHION OFFERS"}
            style={{ color: "white" }}
            differentDealsItemList={fashionOffers}
            loading={loading}
          />
        </div>
        <div className="different-deals-bg2">
          <OffersDeals
            differentDealsHeading={"ELECTRONICS OFFERS"}
            style={{ color: "white" }}
            differentDealsItemList={electronicsOffers}
            loading={loading}
          />
        </div>
        <div className="different-deals-bg3">
          <OffersDeals
            differentDealsHeading={"HEALTH & BEAUTY"}
            style={{ color: "white" }}
            differentDealsItemList={healthAndBeautyOffers}
            loading={loading}
          />
        </div>
        <div className="different-deals-bg4">
          <OffersDeals
            style={{ color: "white" }}
            differentDealsHeading={"HOME & KITCHEN"}
            differentDealsItemList={homeAndKitchenOffers}
            loading={loading}
          />
        </div>
        <div className="different-deals-bg5">
          <OffersDeals
            style={{ color: "white" }}
            differentDealsHeading={"OTHERS"}
            differentDealsItemList={otherOffers}
            loading={loading}
          />
        </div>
        {/* <ItemCard
          itemCardHeading={"TOP SELLING MOBILE PHONES"}
          itemCardItemList={topMobileItemList}
        />
        <ItemCard
          itemCardHeading={"BEST HEADPHONES DEALS"}
          itemCardItemList={topMobileItemList}
        />
        <ItemCard
          itemCardHeading={"HOME AND KITCHEN TOP DEALS"}
          itemCardItemList={topMobileItemList}
        /> */}
      </div>
    </div>
  );
};
export default HomePage;
