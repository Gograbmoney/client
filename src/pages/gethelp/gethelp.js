import React from "react"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { MdOutlineScreenSearchDesktop, MdOutlineShoppingCart } from "react-icons/md"
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./gethelp.css"
const GetHelp = () => {
  return (
    <div>
      <Header />
      <div className="gethelp-content-body">
        <div className="gethelp-content-container">
          <div class=" gethelp-heading-content-container">
            <div class="title-img-bg w-100" style={{ "background": "url(https://cashbackos.com/wp-content/uploads/2020/01/page-title-bg.png)" }}>
              <div class="col-md-12 py-5">
                <div class="page-title mb-0">Frequently Asked Questions</div>
                <p class="page-description mt-4 mb-0">
                </p><p class="has-text-color has-very-light-gray-color">Find here all the questions that you may have about the usage of our website, terms, how it works, referral etc.</p>
                <p></p>
              </div>
            </div>
          </div>
          <div class="gethelp-pills-content-container">
            <div class=" gethelp-nav-link-container">
              <div class="nav nav1 flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link1 active" id="v-pills-all-tab" data-toggle="pill" href="#v-pills-all" role="tab" aria-controls="v-pills-all" aria-selected="true">All</a>
                <a class="nav-link1" id="v-pills-cashfact-tab" data-toggle="pill" href="#v-pills-cashfact" role="tab" aria-controls="v-pills-cashfact" aria-selected="false">Cashback Facts</a>
                <a class="nav-link1" id="v-pills-cashIssues-tab" data-toggle="pill" href="#v-pills-cashIssues" role="tab" aria-controls="v-pills-cashIssues" aria-selected="false">Cashback Issues</a>
                <a class="nav-link1" id="v-pills-how-it-works-tab" data-toggle="pill" href="#v-pills-how-it-works" role="tab" aria-controls="v-pills-how-it-works" aria-selected="false">How it Works</a>
                {/* <a class="nav-link1" id="v-pills-contact-us-tab" data-toggle="pill" href="#v-pills-contact-us" role="tab" aria-controls="v-pills-contact-us" aria-selected="false">Contact Us</a> */}
              </div>
            </div>
            <div class=" gethelp-nav-tab-content-container">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-all" role="tabpanel" aria-labelledby="v-pills-all-tab">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>Why was my cashback canceled?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Some common reasons why cashback is declined are:<br /><br />

                        The order was cancelled.<br />
                        The order was returned or partially returned.<br />
                        The order was exchanged or partially exchanged.<br />
                        The order was changed.<br />
                        The order was paid for using a gift code or gift voucher.<br />
                        The order was paid for using Cash on Delivery.<br />
                        The order might have been classified as bulk order from a wholesaler or a travel agent etc.<br />
                        The order did not comply with the store’s cashback policy. To see details on store specific cashback policy please see ‘Cashback Terms’ section for cashback merchants.<br />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>My Cashback Has Not Tracked At All, What Do I Do?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        It can take 48 – 72  hours for cashback to get tracked. In case your transaction was not tracked even after this duration, please raise a Missing Cashback Claim for the transaction which was Not Tracked. Please note, merchants accept claims for cashback not tracked cases only till 7th day from the purchase date.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>Are There Cases Where There Is No Cashback?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, there are stores and offers on which there is no cashback applicable. These will not carry the additional Cashback label.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4a-content"
                      id="panel4a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>Why Does It Take So Long To Confirm The Cashback?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Unfortunately, the cashback process is such that we have to wait for the store to confirm to us that the purchase was not returned or exchanged. Merchants also use this time to validate that the sale has met conditions for earning of cashback.
                        We constantly work with stores to reduce this wait period. However, just to be on the safe side we inform you that it may usually take 4-8 weeks for a transaction to be confirmed.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5a-content"
                      id="panel5a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>What’s Rewards?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Stores like Amazon allow cashback earned from them to be used only for transfers to gift cards from Amazon . To make this distinction easier to understand, the cashback earned from these merchants is referred to as Rewards.
                        The process for earning of Rewards is the same as Cashback, and the only distinction being that Rewards cannot be withdrawn to a bank account. It is due to this, that the available balance on a bank transfer page may be less than your actual available balance.
                        Any stores carrying Rewards instead of Cashback will explicitly mention them on the respective store pages. The majority of stores do not carry rewards.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel6a-content"
                      id="panel6a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>What Is Cashback?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        In addition to the discounts for online shopping that are listed on our website, we also give you an option of earning additional cashback on your online purchases. Stores and offers that have additional cashback can be identified by looking for a cashback labels, like  – “Up to 5% Cashback” or “$ off XX dollar amount purchase” or even “free shipping” offer.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div class="tab-pane fade" id="v-pills-cashfact" role="tabpanel" aria-labelledby="v-pills-cashfact-tab">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel31a-content"
                      id="panel31a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>Are There Cases Where There Is No Cashback?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, there are stores and offers on which there is no cashback applicable. These will not carry the additional Cashback label.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel41-content"
                      id="panel41-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>Why Does It Take So Long To Confirm The Cashback?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Unfortunately, the cashback process is such that we have to wait for the store to confirm to us that the purchase was not returned or exchanged. Merchants also use this time to validate that the sale has met conditions for earning of cashback.
                        We constantly work with stores to reduce this wait period. However, just to be on the safe side we inform you that it may usually take 4-8 weeks for a transaction to be confirmed.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div class="tab-pane fade" id="v-pills-cashIssues" role="tabpanel" aria-labelledby="v-pills-cashIssues-tab">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel11a-content"
                      id="panel11a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>Why was my cashback canceled?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Some common reasons why cashback is declined are:<br /><br />

                        The order was cancelled.<br />
                        The order was returned or partially returned.<br />
                        The order was exchanged or partially exchanged.<br />
                        The order was changed.<br />
                        The order was paid for using a gift code or gift voucher.<br />
                        The order was paid for using Cash on Delivery.<br />
                        The order might have been classified as bulk order from a wholesaler or a travel agent etc.<br />
                        The order did not comply with the store’s cashback policy. To see details on store specific cashback policy please see ‘Cashback Terms’ section for cashback merchants.<br />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel22a-content"
                      id="panel22a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>My Cashback Has Not Tracked At All, What Do I Do?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        It can take 48 – 72  hours for cashback to get tracked. In case your transaction was not tracked even after this duration, please raise a Missing Cashback Claim for the transaction which was Not Tracked. Please note, merchants accept claims for cashback not tracked cases only till 7th day from the purchase date.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div class="tab-pane fade" id="v-pills-how-it-works" role="tabpanel" aria-labelledby="v-pills-how-it-works-tab">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel12a-content"
                      id="panel12a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>How it works?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div class="row hiw-row">
                          <div class="col-md-6 col-lg-3">
                            <div class="howItWork">
                              <div class="hiw-icon">
                                <MdOutlineScreenSearchDesktop />
                              </div>
                              <div class="hiw-des">
                                <h3 class="hiw-title">Browse</h3>
                                <p class="hiw-content">Login/Join Gograbmoney and browse thousands of coupons &amp; deals from hundreds of online stores.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                            <div class="howItWork">
                              <div class="hiw-icon">
                                <MdOutlineShoppingCart />
                              </div>
                              <div class="hiw-des">
                                <h3 class="hiw-title">Shop</h3>
                                <p class="hiw-content">Click through Gograbmoney links and shop from your favorite stores like Ajio, Jabong, Myntra and 300+ stores</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                            <div class="howItWork">
                              <div class="hiw-icon">
                                <GiTakeMyMoney />
                              </div>
                              <div class="hiw-des">
                                <h3 class="hiw-title">Earn</h3>
                                <p class="hiw-content">After a purchase, the transaction gets tracked within 72 hours and the cashback is credited to your account.</p>                    </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                            <div class="howItWork">
                              <div class="hiw-icon">
                                <GiReceiveMoney />
                              </div>
                              <div class="hiw-des">
                                <h3 class="hiw-title">Withdraw</h3>
                                <p class="hiw-content">On reaching a minimum threshold of ₹250 or more as ‘Confirmed Cashback’ you can withdraw the cashback.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel51a-content"
                      id="panel51a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>What’s Rewards?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Stores like Amazon allow cashback earned from them to be used only for transfers to gift cards from Amazon . To make this distinction easier to understand, the cashback earned from these merchants is referred to as Rewards.
                        The process for earning of Rewards is the same as Cashback, and the only distinction being that Rewards cannot be withdrawn to a bank account. It is due to this, that the available balance on a bank transfer page may be less than your actual available balance.
                        Any stores carrying Rewards instead of Cashback will explicitly mention them on the respective store pages. The majority of stores do not carry rewards.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel61a-content"
                      id="panel61a-header"
                    >
                      <Typography style={{ "font-weight": "600" }}>What Is Cashback?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        In addition to the discounts for online shopping that are listed on our website, we also give you an option of earning additional cashback on your online purchases. Stores and offers that have additional cashback can be identified by looking for a cashback labels, like  – “Up to 5% Cashback” or “$ off XX dollar amount purchase” or even “free shipping” offer.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div class="tab-pane fade" id="v-pills-contact-us" role="tabpanel" aria-labelledby="v-pills-contact-us-tab">
                  <section class="mb-4">
                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                      a matter of hours to help you.</p>
                    <div class="row">
                      <div class="col-md-12 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control" />
                                <label for="name" class="">Your name</label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="md-form mb-0">
                                <input type="text" id="email" name="email" class="form-control" />
                                <label for="email" class="">Your email</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" class="form-control" />
                                <label for="subject" class="">Subject</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                <label for="message">Your message</label>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div class="text-center text-md-left">
                          <a class="btn contact-us-submit-button">Send</a>
                        </div>
                        <div class="status"></div>
                      </div>
                    </div>
                  </section>

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

export default GetHelp;
