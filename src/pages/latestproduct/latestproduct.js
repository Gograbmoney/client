import React from "react";
import AllStores from "../../components/allstores/allstores";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import TopCategoriesSidebar from "../../components/topcategoriessidebar/topcategoriessidebar";
import "./latestproduct.css";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const LatestProductList = [
  {
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
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
    storeName : "Amazon",
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


const ItemCards = (props) => {
  const { itemCardProps } = props;

  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(store, price, cashback, buy) {
    return { store, price, cashback, buy };
  }

  const rows = [
    createData('Amazon', 60, "Get 8% cashback", "https://www.amazon.com/"),
    createData('Flipcart', 62, "Get 10% cashback", "https://www.amazon.com/"),
    createData('Ajio', 68, "Get 14% cashback", "https://www.amazon.com/")
  ];

  return (
    <div className="latest-card-container">
      <div className="latest-card-heading-container">
        <a href="" data-toggle="modal" data-target="#latestCardModal">{itemCardProps.cardHeadingText} </a>
        <img
          src={itemCardProps.cardHeadingImage}
          alt=""
          className="latest-heading-image"
        />
      </div>
      <div className="latest-card-product-container">
        <div className="image-brand-container">
          <img
            src={itemCardProps.productImage}
            alt=""
            className="latest-product-image"
          />
          <p>
            Brand:<span>{itemCardProps.brand}</span>
          </p>
        </div>
        <span className="latest-card-product-name">
          {itemCardProps.productName}
        </span>
        <div className="latest-change-in-value">
          <span className="latest-value">₹{itemCardProps.value}</span>
          <span className="latest-off-value">₹{itemCardProps.offValue}</span>
          <span className="latest-percentage-off">
            ({itemCardProps.percentageOff}% Off)
          </span>
        </div>
        <span className="latest-card-cashback-value">
          +₹{itemCardProps.cashBackValue} Cashback
        </span>
        <span className="latest-final-price">
          Final Price ₹{itemCardProps.finalValue}
        </span>
      </div>
      <div class=" modal fade" id="latestCardModal" tabindex="-1" aria-labelledby="latestCardModalLabel" aria-hidden="true">
        <div class=" modal-dialog">
          <div class=" modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="latestCardModalLabel">{itemCardProps.productName}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Stores</StyledTableCell>
                      <StyledTableCell align="right">Price</StyledTableCell>
                      <StyledTableCell align="right">Cashback</StyledTableCell>
                      <StyledTableCell align="right">Buy</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.store}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.price}</StyledTableCell>
                        <StyledTableCell align="right">{row.cashback}</StyledTableCell>
                        <StyledTableCell align="right"><a href={row.buy} target="_blank" className="btn modal-buy-button">Buy</a></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const LatestProduct = () => {
  return (
    <div style={{height: "100vh"}}>
      <div className="latest-product-container">
        <div className="latest-product-content-container">
          <h4>LATEST PRODUCT</h4>
          <div className="latest-product-content-card-container">
            {LatestProductList.map((eachItem, index) => (
              <ItemCards key={index} itemCardProps={eachItem} />
            ))}
          </div>
        </div>
        {/* <div className="latest-product-sidebar">
          <AllStores />
          <TopCategoriesSidebar />
        </div> */}
      </div>
    </div>
  );
};

export default LatestProduct;
