import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./category.css";

const Categories = () => {
  return (
    <div style={{height: "100vh"}}>
      <div className="categories-body">
        <div className="categories-container">
          <h1>CATEGORIES</h1>
          <hr />
          <div className="categories-card-container">
            <div >
                <span>MOBILES</span>
            </div>
            <div>
                <span>ELECTRONICS</span>
                <p>Televisions</p>
                <p>Speakers</p>
                <p>Power Banks</p>
                <p>Data Storage</p>
                <p>Monitors</p>
                <a href="">View All</a>
            </div>
            <div>
                <span>MEN CLOTHING</span>
                <p>Men Tshirts</p>
                <p>Men Shirts</p>
                <p>Men Jeans & Trousers</p>
                <p>Men Winterwear</p>
            </div>
            <div>
                <span>WOMEN CLOTHING</span>
                <p>Women Tops & Tshirts</p>
                <p>Women Dresses</p>
                <p>Kurtas & Kurtis</p>
                <p>Women Jeans & Trousers</p>
                <p>Women Ethnic Wear</p>
                <a href="">View All</a>
            </div>
            <div>
                <span>BABY PRODUCTS</span>
                <p>Diapers</p>
                <p>Baby Grooming</p>
                <p>Baby Skin Care</p>
                <p>Bath Essentials</p>
                <p>Wipes</p>
            </div>
            <div>
            <span>SKIN CARE</span>
                <p>Face Wash & Cleansers</p>
                <p>Creams & Moisturizers</p>
                <p>Scrubs & Exfoliators</p>
                <p>Serums & Facial Oils</p>
                <p>Face Masks & Peels</p>
                <a href="">View All</a>
             </div>
             <div>
                <span>FRAGRANCES</span>
                <p>Deodorants</p>
                <p>Men Perfumes</p>
                <p>Women Perfumes</p>
                
            </div>
            <div>
            <span>HAIR CARE</span>
                <p>Shampoos</p>
                <p>Hair Conditioners</p>
                <p>Hair Styling</p>
                <p>Hair Treatment</p>
                <p>Beard & Shaving</p>
            </div>
            <div>
                <span>PERSONAL CARE APPLIANCES</span>
                <p>Shavers & Trimmers</p>
                <p>Hair Dryers</p>
                <p>Hair Straighteners</p>
            </div>
            <div>
                <span>HOME APPLIANCES</span>
                <p>Refrigerators</p>
                <p>Washing Machines</p>
                <p>Air Conditioners</p>
                <p>Air Purifers</p>
                <p>Water Heaters</p>
                <a href="">View All</a>
            </div>
            <div>
                <span>KITCHEN APPLIANCES</span>
                <p>Juicer Mixer Grinders</p>
                <p>Hand Blenders</p>
                <p>Microwaves</p>
                <p>Induction Cooktops</p>
                <p>Food Processors</p>
            </div>
            <div>
                <span>VIEW ALL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
