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
    <div className="store-card">
      <div className='stores-image-container'>
        <Link to={`/stores/${eachItemProps._id}`} >
          <img src={eachItemProps.image} alt="" className='stores-image' />
        </Link>
      </div>

      <span>{eachItemProps.merchant}</span>
      <Link to={`/stores/${eachItemProps._id}`} >
        Upto {eachItemProps.commision} Cashback
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
        <span className='offer-cashback'>Upto {differentdealsProps.commision} Cashback</span>
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
  let { category } = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1)

  const { loading, error, merchant, merchantCount, resPerPage, categoryCount } = useSelector(state => state.merchant);
  console.log(merchant)
  useEffect(() => {
    dispatch(getMerchants(currentPage, "", category));
  }, [dispatch, currentPage, "", category])

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <span style={{ marginLeft: "10px", fontWeight: "bold" }}>({categoryCount}) RESULTS IN STORES </span>
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
                (categoryCount > resPerPage) ? <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={categoryCount}
                  onChange={setCurrentPageNo}
                  nextPageText={">"}
                  prevPageText={"<"}
                  firstPageText={"<<"}
                  lastPageText={">>"}
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
  let { category } = useParams();
  const dispatch = useDispatch();
  const { loading, error, offer, offerCount, resPerPage } = useSelector(state => state.offer);
  useEffect(() => {
    dispatch(getOffers(1, "", category));
  }, [dispatch, 1, "", category])

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

const SearchCategory = () => {
  const { category } = useParams();
  return (
    <div className="stores-body" >
      <div className="stores-container">
        <div className="category-heading-container">
          <h3 className="category-heading">{category}</h3>
          <span>Gograbmoney Cashback </span>
        </div>
        <hr />
        <SearchMerchants />
        <hr />
        <SearchOffers />
      </div>
    </div>
  )
}

export default SearchCategory