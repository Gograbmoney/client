import React, { useState, useEffect } from "react";
import "./stores.css";
import Metadata from "..//..//components/metadata"
import { useDispatch, useSelector } from "react-redux"
import { getMerchants } from "../../actions/merchantActions";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination"
import Loader from "../../components/Loader";


const StoresCard = (props) => {
  const { eachItemProps } = props;
  return (
    <div className="store-card">
      <Link to={`/stores/${eachItemProps._id}`} >
        <img src={eachItemProps.image} alt="" />
      </Link>
      <span>{eachItemProps.merchant}</span>
      <Link to={`/stores/${eachItemProps._id}`} >
        Upto {eachItemProps.commision}% Cashback
      </Link>
    </div>
  );
};
const Stores = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch();
  const { loading, error, merchant, merchantCount, resPerPage } = useSelector(state => state.merchant);


  useEffect(() => {
    dispatch(getMerchants(currentPage));
  }, [dispatch, currentPage])


  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <Metadata title="Stores" />
      <div className="stores-body">
        <div className="stores-container">
          <h1>STORES</h1>
          <hr />
          {
            loading ? <Loader/> : (
              <div className="stores-card-container">
                {merchant && merchant.map((eachItem) => (
                  <StoresCard key={eachItem._id} eachItemProps={eachItem} />
                ))}
                <div className="pagination">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resPerPage}
                    totalItemsCount={merchantCount}
                    onChange={setCurrentPageNo}
                    nextPageText={"Next"}
                    prevPageText={"Prev"}
                    firstPageText={"First"}
                    lastPageText={"Last"}
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Stores;


// const [merchantdata, setmerchantdata] = useState({})

// const getMerchant = async () => {
//   try {
//     const res = await fetch('http://localhost:5000/api/v1/merchant', {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       }
//     })
//     const data = await res.json();

//     setmerchantdata(data);

//     if (!res.status === 200) {
//       const error = new Error(res.error)
//       throw error;
//     }
//   }
//   catch (err) {
//     console.log(err)
//   }
// }
// useEffect(() => {
//   getMerchant();
// }, [])


// const storesList = merchantdata.merchant;