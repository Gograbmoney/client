import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
//import Bonuses from "./bonuses";
import Clicks from "./clicks";
import "./myprofile.css";
import Transactions from "./transactions";
import Withdrawals from "./withdrawal";
import { Link } from "react-router-dom";
import PaymentDetails from "./paymentdetails";
import AccountDetails from "./accountdetails";
import WithdrawalRequest from "./withdrawalrequest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const MyProfile = () => {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState({});

  const callAbout = async () => {
    try {
      const res = await fetch("http://localhost:5000/getdata", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      setuserdata(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAbout();
  },[]);

  return (
    <div>
      <Header />
      <div className="my-account my-profile-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <div
                class="nav flex-column nav-pills"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link active"
                  id="dashboard-nav"
                  data-toggle="pill"
                  href="#dashboard-tab"
                  role="tab"
                >
                  <i class="fa fa-tachometer-alt"></i>Dashboard
                </a>
                <a
                  class="nav-link"
                  id="clicks-nav"
                  data-toggle="pill"
                  href="#clicks-tab"
                  role="tab"
                >
                  <i class="fa fa-shopping-bag"></i>Clicks
                </a>
                <a
                  class="nav-link"
                  id="orders-nav"
                  data-toggle="pill"
                  href="#orders-tab"
                  role="tab"
                >
                  <i class="fa fa-shopping-bag"></i>Transactions
                </a>
                {/* <a
                  class="nav-link"
                  id="bonuses-nav"
                  data-toggle="pill"
                  href="#bonuses-tab"
                  role="tab"
                >
                  <i class="fa fa-shopping-bag"></i>Bonuses
                </a> */}
                <a
                  class="nav-link"
                  id="withdrawls-nav"
                  data-toggle="pill"
                  href="#withdrawls-tab"
                  role="tab"
                >
                  <i class="fa fa-shopping-bag"></i>Withdrawals
                </a>
                <a
                  class="nav-link"
                  id="payment-nav"
                  data-toggle="pill"
                  href="#payment-tab"
                  role="tab"
                >
                  <i class="fa fa-credit-card"></i>Payment Details
                </a>
                <a
                  class="nav-link"
                  id="account-nav"
                  data-toggle="pill"
                  href="#account-tab"
                  role="tab"
                >
                  <i class="fa fa-user"></i>Account Details
                </a>
                <Link class="nav-link" to="/logout">
                  <i class="fa fa-sign-out-alt"></i>Logout
                </Link>
              </div>
            </div>
            <div class="col-md-10">
              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="dashboard-tab"
                  role="tabpanel"
                  aria-labelledby="dashboard-nav"
                >
                  <h4>Dashboard</h4>
                  <div className="dashboard-earning-container">
                    <div>
                      <span>Earnings</span>
                      <hr />
                      <span>₹0.00</span>
                    </div>
                    <div>
                      <span>Withdrawn</span>
                      <hr />
                      <span>₹0.00</span>
                    </div>
                    <div>
                      <span>Pending Approval</span>
                      <hr />
                      <span>₹0.00</span>
                    </div>
                    <div>
                      <span>Balance</span>
                      <hr />
                      <span>₹0.00</span>
                    </div>
                  </div>
                  <div className="dashboard-trans-bonus-container">
                    <div>
                      <div class="card bg-light mb-3 p-0">
                        <div class="card-header">
                          <h5>Transactions till date</h5>
                        </div>
                        <div class="card-body table-responsive p-0">
                          <table class="table mb-0">
                            <tbody>
                              <tr>
                                <td>Total Transactions</td>
                                <td>₹0.00</td>
                              </tr>
                              <tr>
                                <td>Cashback Earned</td>
                                <td>₹0.00</td>
                              </tr>
                              <tr>
                                <td>Pending Approval</td>
                                <td>₹0.00</td>
                              </tr>
                              <tr>
                                <td>Approved</td>
                                <td>₹0.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div class="card bg-light mb-3 p-0">
                        <div class="card-header">
                          <h5>Bonuses till date</h5>
                        </div>
                        <div class="card-body table-responsive p-0">
                          <table class="table mb-0">
                            <tbody>
                              <tr>
                                <td>Number of Bonuses</td>
                                <td>0</td>
                              </tr>
                              <tr>
                                <td>Total Bonuses</td>
                                <td>₹0.00</td>
                              </tr>
                              <tr>
                                <td>Pending Approval</td>
                                <td>₹0.00</td>
                              </tr>
                              <tr>
                                <td>Approved</td>
                                <td>₹0.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="clicks-tab"
                  role="tabpanel"
                  aria-labelledby="clicks-nav"
                >
                  <div class="table-responsive">
                    <h4>CLICKS</h4>
                    <Clicks />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="orders-tab"
                  role="tabpanel"
                  aria-labelledby="orders-nav"
                >
                  <div>
                    <h4>CASHBACK TRANSACTIONS</h4>
                    <Transactions />
                  </div>
                </div>
                {/* <div
                  class="tab-pane fade"
                  id="bonuses-tab"
                  role="tabpanel"
                  aria-labelledby="bonuses-nav"
                >
                  <div>
                  <h4>BONUSES</h4>
                    <Bonuses />
                  </div>
                </div> */}
                <div
                  class="tab-pane fade"
                  id="withdrawls-tab"
                  role="tabpanel"
                  aria-labelledby="withdrawls-nav"
                >
                  <div>
                    <h4>WITHDRAWAL</h4>
                    <WithdrawalRequest />
                    <h4>WITHDRAWAL HISTORY</h4>
                    <Withdrawals />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="payment-tab"
                  role="tabpanel"
                  aria-labelledby="payment-nav"
                >
                  <div>
                    <PaymentDetails />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="account-tab"
                  role="tabpanel"
                  aria-labelledby="account-nav"
                >
                  <div>
                    <AccountDetails />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
