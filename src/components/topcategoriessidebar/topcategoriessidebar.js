import React from "react";

const TopCategoriesSidebar = () => {
  return (
    <div className="top-categories-side-bar-container">
      <div id="categorylist_widget-5" class="widget categorylist_widget card">
        <div class="card-header widget-title">Top Categories</div>
        <div class="cmd-categorylist-widget list-group">
          <a
            href="https://demo.clipmydeals.com/7/offer-category/electronic-accessories/"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Electronic Accessories
            <span class="badge badge-primary badge-pill">6</span>
          </a>
          <a
            href="https://demo.clipmydeals.com/7/offer-category/luggage/"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Luggage<span class="badge badge-primary badge-pill">4</span>
          </a>
          <a
            href="https://demo.clipmydeals.com/7/offer-category/shoes/"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Shoes<span class="badge badge-primary badge-pill">4</span>
          </a>
          <a
            href="https://demo.clipmydeals.com/7/offer-category/watches/"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Watches<span class="badge badge-primary badge-pill">3</span>
          </a>
          <a
            href="https://demo.clipmydeals.com/7/offer-category/travel/"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Travel<span class="badge badge-primary badge-pill">1</span>
          </a>
          <a
            href="https://demo.clipmydeals.com/7/offer-category/electronics/"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Electronics<span class="badge badge-primary badge-pill">0</span>
          </a>
          <a
            href="https://demo.clipmydeals.com/7/offer-category/fashion/"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Fashion<span class="badge badge-primary badge-pill">0</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopCategoriesSidebar;
