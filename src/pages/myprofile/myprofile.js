import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
//import Bonuses from "./bonuses";
import Clicks from "./clicks";
import "./myprofile.css";
import Transactions from "./transactions";
import Withdrawals from "./withdrawal";
import { Link } from "react-router-dom";
import WithdrawalRequest from "./withdrawalrequest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const MyProfile = () => {

  const navigate = useNavigate();

  const [userdata, setuserdata] = useState({});
  const [paymentdata, setpaymentdata] = useState({});
  const [passworddata, setpassworddata] = useState({
    currentpassword: "",
    password: "",
    cpassword: ""
  });

  let paymentdetailEl = document.getElementById("payment-details-update");
  let accountdetailEl = document.getElementById("account-details-update");
  let passworddetailEl = document.getElementById("password-details-update");

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value

    setuserdata({ ...userdata, [name]: value });
    setpaymentdata({ ...paymentdata, [name]: value });
    setpassworddata({ ...passworddata, [name]: value });
  }



  const submitPaymentDetails = async (e) => {
    try {
      e.preventDefault();
      const { taxId, nameOfBank, bankCode, accountNumber, nameOfAccount } = paymentdata
      const res = await fetch("https://server-gograbmoney.herokuapp.com/api/v1/me/update/paymentdetails", {
        method: "PUT",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taxId, nameOfBank, bankCode, accountNumber, nameOfAccount })
      });

      if (res.status === 200) {
        paymentdetailEl.textContent = "Payment details updated successfully!!!";
        paymentdetailEl.style.color = "green";
      }

    } catch (error) {
      console.log(error);
    }
  }

  const submitAccountDetails = async (e) => {
    try {
      e.preventDefault();
      const { name, mobile, email, address } = userdata
      const res = await fetch("https://server-gograbmoney.herokuapp.com/api/v1/me/update", {
        method: "PUT",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile, email, address })
      });

      if (res.status === 200) {
        accountdetailEl.textContent = "Account details updated successfully!!!";
        accountdetailEl.style.color = "green";
      }

    } catch (error) {
      console.log(error);
    }
  }

  const submitPasswordDetails = async (e) => {
    try {
      e.preventDefault();
      const { currentpassword, password, cpassword } = passworddata
      if (password === cpassword) {
        const res = await fetch("https://server-gograbmoney.herokuapp.com/api/v1/password/update", {
          method: "PUT",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currentpassword, password })
        });

        if (res.status === 200) {
          passworddetailEl.textContent = "Password updated successfully!!!";
          passworddetailEl.style.color = "green";
        } else {
          passworddetailEl.textContent = "Current password is incorrect !!!";
          passworddetailEl.style.color = "red";
        }
      }
      else {
        passworddetailEl.textContent = "New password and Confirm password did not match !!!";
        passworddetailEl.style.color = "red";
      }

    } catch (error) {
      console.log(error);
    }
  }

  const callAbout = async () => {
    try {

      const res = await fetch("https://server-gograbmoney.herokuapp.com/api/v1/me", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setuserdata(data.user);
      // console.log("hi")
      //console.log(data.user);
      // console.log(data.user.paymentdetails);
      setpaymentdata(data.user.paymentdetails);


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
    callAbout()
  }, []);

  return (
    <div >

      <div className="my-account my-profile-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <div
                class="nav flex-column nav-pills"
                role="tablist"
                aria-orientation="vertical"
              >
               {
                userdata.role==="admin"?<a
                    class="nav-link"
                    id="admin-nav"
                    data-toggle="pill"
                    href="#admin-tab"
                    role="tab"
                  >
                    <i class="fa fa-tachometer-alt"></i>Admin
                  </a>:null
                }
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
                    <h4>Payment Method</h4>
                    <form method="PUT" onSubmit={submitPaymentDetails}>
                      <div>
                        <label for="tax_id">Tax ID:</label><br />
                        <input className="account-details-form  form-control " type="text" id="tax_id" name="taxId" value={paymentdata.taxId} onChange={handleInputs} /><br />
                        <span class="description">The unique Tax Identification Number of your country. Known as TIN, PAN, UID, etc. in different countries</span>
                      </div>
                      <h3>Bank Details</h3>
                      <div>
                        <label for="bank_name">Name of Bank:</label><br />
                        <input className="account-details-form  form-control " type="text" id="bank_name" name="nameOfBank" value={paymentdata.nameOfBank} onChange={handleInputs} /><br />
                        <label for="bank_code">Bank Code:</label><br />
                        <input className="account-details-form  form-control " type="text" id="bank_code" name="bankCode" value={paymentdata.bankCode} onChange={handleInputs} /><br />
                        <label for="bank_account_number">Account Number:</label><br />
                        <input className="account-details-form  form-control " type="number" id="bank_account_number" name="accountNumber" value={paymentdata.accountNumber} onChange={handleInputs} /><br />
                        <label for="bank_account_name">Name of Account:</label><br />
                        <input className="account-details-form  form-control " type="text" id="bank_account_name" name="nameOfAccount" value={paymentdata.nameOfAccount} onChange={handleInputs} /><br />
                        <input type="submit" name="submit" id="submit-payment-details" class="button button-primary " value="Save Changes"  />
                        <p id="payment-details-update" ></p>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="account-tab"
                  role="tabpanel"
                  aria-labelledby="account-nav"
                >
                  <div>
                    <h4>Account Details</h4>
                    <form method="PUT" onSubmit={submitAccountDetails}>
                      <label for="username1">Username:</label><br />
                      <input className="account-details-form  form-control " type="text" id="username1" name="name" value={userdata.name} /><br />
                      <label for="mobile1">Mobile:</label><br />
                      <input className="account-details-form form-control " type="number" id="mobile1" name="mobile" value={userdata.mobile} autoComplete="off" onChange={handleInputs} /><br />
                      <label for="email1">Email:</label><br />
                      <input className="account-details-form form-control " type="text" id="email1" name="email" value={userdata.email} autoComplete="off" /><br />
                      <label for="address1">Address:</label><br />
                      <input className="account-details-form form-control " type="text" id="address1" name="address" value={userdata.address} autoComplete="off" onChange={handleInputs} /><br />
                      <input type="submit" name="submit" id="submit-account-details" class="button button-primary " value="Update Account"  />
                      <p id="account-details-update" ></p>
                    </form>
                    <h4>Password change</h4>
                    <form method="PUT" onSubmit={submitPasswordDetails}>

                      <label for="current_password">Current Password:</label><br />
                      <input className="account-details-form form-control " type="password" id="current_password" name="currentpassword" value={passworddata.currentpassword} autoComplete="off" onChange={handleInputs} /><br />
                      <label for="new_password">New Password:</label><br />
                      <input className="account-details-form form-control " type="password" id="new_password" name="password" value={passworddata.password} autoComplete="off" onChange={handleInputs} /><br />
                      <label for="confirm_password">Confirm Password:</label><br />
                      <input className="account-details-form form-control " type="password" id="confirm_password" name="cpassword" value={passworddata.cpassword} autoComplete="off" onChange={handleInputs} /><br />

                      <input type="submit" name="submit" id="submit-password-details" class="button button-primary " value="Save Changes"  />
                      <p id="password-details-update" ></p>
                    </form>
                  </div>
                </div>
                {/* <div
                  class="tab-pane fade show active"
                  id="admin-tab"
                  role="tabpanel"
                  aria-labelledby="admin-nav"
                >
                  <h4>Admin Dashboard</h4>
    
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyProfile;
