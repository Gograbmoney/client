import Carousal from "../../components/carousal/carousal";
import  Header  from "../../components/header/header";
import TopCategories from "../../components/topcategories/topcategories";
import "../../App.css";
import FlashDeals from "../../components/flashdeals/flashdeals";
import DifferentDeals from "../../components/differentdeals/differentdeals";
import ItemCard from "../../components/itemcard/itemcard";
import Footer from "../../components/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mCaffeineItemList = [
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-19-Mcaffeine-Dealcard1-1647760496-1647852131.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/bodybutter-1647860934.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/bodywash-1647860968.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-19-Mcaffeine-Dealcard4-1647760548.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-19-Mcaffeine-Dealcard5-1647760561.jpg",
  },
];
const ajioItemList = [
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/2%20Old%203Lines%20(1)%20(1)-1639988487.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/ck400-1646651211.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/cktrends-1646651262.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/ckajio1000-1646651290.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/4-07-03-22-AJIO-DCckajio2000-1646651176.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/5-07-03-22-AJIO-DC80-pc-1646651340.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/3%20Old%203Lines%20(1)-1639988471.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/02-25-Ajio-Dealcard110off-1645784227.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/AjioDCwmen70-1646138335.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/AjioDCmenshoesRev-1646138436.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/AjioDCmentshirts-1646138299.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-11-Ajio-Dealcard1-1646981164.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-11-Ajio-Dealcard1-1646981164.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-11-Ajio-Dealcard2-1646980987.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-11-Ajio-Dealcard3-1646980959.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/4%20Ajio%20Deal%20Card-%2009-12-2021-1639988574.jpg",
  },
];
const wowsomeItemList = [
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-1-1647511815.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-2-1647511832.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-3-1647511845.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-4-1647511863.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-5-1647511880.jpg",
  },
];
const dellItemList = [
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/2%20Dealcard-1640604928.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/1%2025-02-22-Dell-DC-1645773079.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/2%2025-02-22-Dell-DC-1645773096.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/3%2025-02-22-Dell-DC-1645773047.jpg",
  },
];
const allBeautyDealsList = [
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-17-Mcaffeine-Dealcard2-1647619261.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/17-03-22-Wow-DC-1647516620.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/mamaearthsjfbs-1640603687.png",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/02-16-Tatacliq-Dealcard1-1644990875.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/14-03-22-Juicy%20Chemistry%20DC-1647260547.jpg",
  },
];
const newDealsList = [
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-17-Zepto-Dealcard1-1647535965.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/14-03-22-Juicy%20Chemistry%20DC-1647260547.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-hongskitchen-1647433323.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-borngood-1647433042.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-ekdum-1647433059.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/03-14-Giva-Dealcard-1647269201.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-slursh-1647433131.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/Dealcard-superbottoms-1647433142.jpg",
  },
  {
    differentDealsItem:
      "https://asset22.ckassets.com/resources/image/staticpage_images/2%20Promo%20DC-05-03-22-1646459379.jpg",
  },
];
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
  return (
    <div>
      <Header/>
      <div className="content-body">
        <Carousal />
        <TopCategories />
        {/* <FlashDeals />
        <div className="different-deals-bg1">
          <DifferentDeals
            differentDealsHeading={"MCAFFEINE SUMMER STOCK UP SALE"}
            style={{ color: "white" }}
            differentDealsItemList={mCaffeineItemList}
          />
        </div>
        <div className="different-deals-bg2">
          <DifferentDeals
            differentDealsHeading={"AJIO ALL STARS SALE"}
            style={{ color: "white" }}
            differentDealsItemList={ajioItemList}
          />
        </div>
        <div className="different-deals-bg3">
          <DifferentDeals
            differentDealsHeading={"THE WOWSOME SALE - BUY 1 GET 1 FREE"}
            style={{ color: "white" }}
            differentDealsItemList={wowsomeItemList}
          />
        </div>
        <DifferentDeals
          differentDealsHeading={"DELL BEST OFFERS"}
          differentDealsItemList={dellItemList}
        />
        <ItemCard
          itemCardHeading={"SNAPDEAL BESTSELLERS"}
          itemCardItemList={topMobileItemList}
        />
        <DifferentDeals
          differentDealsHeading={"ALL BEAUTY DEALS"}
          differentDealsItemList={allBeautyDealsList}
        />
        <DifferentDeals
          differentDealsHeading={"NEW ON GOGRABMONEY"}
          differentDealsItemList={newDealsList}
        /> 
        */}
        <ItemCard
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
        />
        {/* <div className="refer-and-earn">
          <h1>Refer Friends & Earn Forever</h1>
          <a href="">
            <img
              src="https://asset22.ckassets.com/resources/image/staticpage_images/refer_banner-1592374081.png"
              alt=""
            />
          </a>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
