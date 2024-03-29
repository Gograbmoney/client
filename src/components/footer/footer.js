import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"
import godaddy from "..//..//image/godaddy.svg"
import norton from "..//..//image/norton.svg"
import ssl from "..//..//image/ssl.svg"
import {BiChevronsRight} from "react-icons/bi"
import {FaMapMarkerAlt,FaEnvelope,FaPhone,FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaLinkedinIn} from "react-icons/fa"
const Footer = () => {
  return (
    <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget">
                            <h2>Get in Touch</h2>
                            <div class="contact-info">
                                <p><FaMapMarkerAlt/> Indian Institute of Technology ,Kharagpur ,India</p>
                                <p mailto="support@gograbmoney.com"><FaEnvelope/> contactus@gograbmoney.com</p>
                                <p><FaPhone/> +123-456-XXXX</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget">
                            <h2>Follow Us</h2>
                            <div class="contact-info">
                                <div class="social">
                                    <a href="https://www.youtube.com/channel/UCDzePaV6qZsUNvaSutXBfkw" target="_blank"><FaYoutube/></a>
                                    <a href="https://www.facebook.com/gograbmoney" target="_blank"><FaFacebookF/></a>
                                    <a href="https://twitter.com/gograbmoney" target="_blank"><FaTwitter/></a>
                                    <a href="https://www.instagram.com/gograbmoney" target="_blank"><FaInstagram/></a>
                                    <a href="https://www.linkedin.com/company/gograbmoney" target="_blank"><FaLinkedinIn/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget">
                            <h2>Help</h2>
                            <ul>
                                <li><Link to="/gethelp"><BiChevronsRight/> FAQs</Link></li>
                                {/* <li><a href="#"><BiChevronsRight/> Missing cashback claims</a></li> */}
                                <li><Link to="/gethelp"><BiChevronsRight/> How it works</Link></li>
                                <li><Link to="/contact"><BiChevronsRight/> Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="row payment align-items-center">
                    <div className='col-md-4'>
                        <div class="payment-security">
                            <h2>Secured By:</h2>
                            <img src={godaddy} alt="Payment Security" />
                            <img src={norton} alt="Payment Security" />
                            <img src={ssl} alt="Payment Security" />
                        </div>
                    </div>
                    <div className='col-md-8'>
                    <p id="lblFooterCopyRight">(©) Copyright 2022 Gograbmoney. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer