import React from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import "./referandearn.css"
import refer from "..//..//image/refer.png"
import like from "..//..//image/like.png"
import teamwork from "..//..//image/teamwork.png"
import cart from "..//..//image/shopping-cart.png"
import growth from "..//..//image/growth.png"
const ReferAndEarn = () => {
  return (
    <div>
        <div className='refer-and-earn-body'>
            <div className='refer-and-earn-body-container'>
            <h1>Refer And Earn</h1>
            <img src={refer} alt="" className="refer-and-earn-main-image"/>
            <h1>How It Works?</h1>
            <div className="refer-and-earn-hiw-container">
                <div className="refer-and-earn-hiw-card">
                    <div>
                    <span>1. Register on our website</span>
                    <p>Sign Up if you haven’t joined already. Login for existing account</p>
                    </div>
                    <img src={like} alt=""/>
                </div>
                <div className="refer-and-earn-hiw-card">
                    <img src={teamwork} alt=""/>
                    <div>
                        <span>2. Invite your Friends</span>
                        <p>Think of all your friends who shop online regularly and invite them. The more you invite, the more you earn.</p>
                    </div>
                </div>
                <div className="refer-and-earn-hiw-card">
                    <div>
                        <span>3. Your Friends Shop & Earn Cashback</span>
                        <p>Your friends shop through our website and start earning cashback for themselves.</p>
                    </div>
                    <img src={cart} alt=""/>
                </div>
                <div className="refer-and-earn-hiw-card">
                    <img src={growth} alt=""/>
                    <div>
                        <span>4. You earn whenever they withdraw</span>
                        <p>Whenever your referrals withdraw their earnings, you get 10% credited to your account as well.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ReferAndEarn