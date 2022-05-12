import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./stores.css";
const storesList = [
  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },

  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    stores_name: "Amazon",
    stores_logo:
      "https://demo1.clipmydeals.com/wp-content/uploads/2018/07/amazon_logo.jpeg",
    stores_cashback: "Upto 7% Cashback",
    stores_link:
      "https://www.amazon.in?&linkCode=ll2&tag=sumitnirmal-21&linkId=30c9bae8dcd6ae779818021b6bfd9875&language=en_IN&ref_=as_li_ss_tl",
  },
];
const StoresCard = (props) => {
  const { eachItemProps } = props;
  return (
    <div className="store-card">
      <img src={eachItemProps.stores_logo} alt="" />
      <span>{eachItemProps.stores_name}</span>
      <a href={eachItemProps.stores_link} target="_blank">
        {eachItemProps.stores_cashback}
      </a>
    </div>
  );
};
const Stores = () => {
  return (
    <div>
      <Header />
      <div className="stores-body">
        <div className="stores-container">
          <h1>STORES</h1>
          <hr />
          <div className="stores-card-container">
            {storesList.map((eachItem, index) => (
              <StoresCard key={eachItem.index} eachItemProps={eachItem} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stores;
