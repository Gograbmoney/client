import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMerchants } from "../../actions/merchantActions";
import { getOffers } from "../../actions/offerActions";
import { useParams, Link, useNavigate } from "react-router-dom"
import "../stores/stores.css";
import "..//..//components/offersdeals/offersdeals.css"
import Loader from '../../components/Loader';
import Pagination from "react-js-pagination"
const StoresCard = (props) => {
  const { eachItemProps } = props;
  return (
    <div className="store-card" >
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

const OffersSlider = (props) => {
  const navigate = useNavigate()
  const { differentdealsProps } = props;
  return (
    <div className='sdd-card-container'>
      <div className='dd-card-content-bar' onClick={() => navigate(`/offer/${differentdealsProps._id}`)} >
        <div className='offer-logo'>
          <img src={differentdealsProps["Image URL"]} className='merchant-image' alt='' />
        </div>
        <span className='offer-title'>{differentdealsProps.Title}</span>
        <span className='offer-cashback'>Upto {differentdealsProps.commision}% Cashback</span>
      </div>
      <div className='dd-card-bottom-bar'>

        <Link to={`/offer/${differentdealsProps._id}`} >
          <button>GRAB DEAL</button>
        </Link>
      </div>
    </div>
  );
}

const SearchMerchants = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1)

  const { loading, error, merchant, merchantCount, resPerPage, searchResultCount } = useSelector(state => state.merchant);

  useEffect(() => {
    dispatch(getMerchants(currentPage, keyword));
  }, [dispatch, currentPage, keyword])

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <span style={{ marginLeft: "10px", fontWeight: "bold" }}>({searchResultCount}) RESULTS IN STORES </span>
      {
        loading ? <Loader /> : (
          <div>
            <div className="stores-card-container">
              {merchant && merchant.map((eachItem) => (
                <StoresCard key={eachItem._id} eachItemProps={eachItem} />
              ))}
            </div>
            <div className="pagination">
              {
                (searchResultCount > resPerPage) ? <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={searchResultCount}
                  onChange={setCurrentPageNo}
                  nextPageText={">>"}
                  prevPageText={"<<"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  itemClass="page-item"
                  linkClass="page-link"
                /> : null
              }
            </div>
          </div>
        )
      }

    </div>
  )
}

const SearchOffers = () => {
  let { keyword } = useParams();
  const dispatch = useDispatch();
  const { loading, error, offer, offerCount, resPerPage } = useSelector(state => state.offer);
  useEffect(() => {
    dispatch(getOffers(1, keyword));
  }, [dispatch, 1, keyword])

  return (
    <div>
      <span style={{ marginLeft: "10px", fontWeight: "bold" }}>({offer.length}) RESULTS IN OFFERS</span>
      {
        loading ? <Loader /> : (
          <div className='s-different-deals-container'>
            {
              offer && offer.map(
                (eachItem, index) => <OffersSlider key={index} differentdealsProps={eachItem} />
              )
            }
          </div>
        )
      }

    </div>
  )
}
function SearchKeyword() {
  const { keyword } = useParams();
  return (
    <div className="stores-body" >
      <div className="stores-container">
        <h5 style={{ margin: "10px" }}>Results for your search '{keyword}'</h5>
        <hr />
        <SearchMerchants />
        <hr />
        <SearchOffers />
      </div>
    </div>
  )
}

export default SearchKeyword