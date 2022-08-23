import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';
import "./register.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const OtpVarification = () => {
    let statusEl = document.getElementById('status-element');
    let resStatusEl = document.getElementById('resend-status-element');
    const location = useLocation();
    let navigate = useNavigate();
    //const { isAuthenticated, error, loading, user } = useSelector(state => state.user);
    const [OTP, setOTP] = useState("");
    let name, value;
    const handleInput = (e) => {
        name = e.target.name
        value = e.target.value

        setOTP({ ...OTP, [name]: value })
    }
    //console.log(location.state.userId)
    const verifyOTP =async(e)=>{
        e.preventDefault();
        statusEl.textContent= ""
        //https://server-gograbmoney.herokuapp.com
        const res = await fetch('https://server-gograbmoney.herokuapp.com/api/v1/verifyotp', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId : location.state.userId,
                otp: OTP
            })
        })
        const data = await res.json()
        if (res.status===200) {
            console.log(data)
            statusEl.textContent= data.message
            statusEl.style.color = "green";
            alert("Your account is successfully verified.")
            navigate("/login")
        }
        else {
            console.log(data)
            statusEl.textContent= data.message
            statusEl.style.color = "red"
        }
    }
    const resendOtp = async()=> {
        const res = await fetch('https://server-gograbmoney.herokuapp.com/api/v1/resendotp', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId : location.state.userId,
                email: location.state.email
            })
        })
        const data = await res.json()

        if (res.status===200) {
            console.log(data)
            resStatusEl.textContent= data.message
            resStatusEl.style.color = "green";
        }
        else {
            console.log(data)
            resStatusEl.textContent= data.message
            resStatusEl.style.color = "red"
        }
    }
    return (
        <div >
            <div className='register-container'>
                <div class="otp-container">
                    <h1>Varify Email</h1>
                    <p>Please enter the varification code sent to your email.</p>
                    
                    <form method='POST' class="otp-form" onSubmit={verifyOTP}>
                        <input type="text" name="OTP" value={OTP.OTP} id="otp"  onChange={handleInput}/>
                        <p id='status-element'></p>
                        
                        <button className='otp-confirmation-btn'>Verify</button>
                    </form>
                    <p  style={{color: '#333'}}>didn't get the code?
                    <button style={{color: '#4AADC2',border : "none",backgroundColor:"white"}} onClick={resendOtp}>Resend code</button></p>
                    <p id='resend-status-element'></p>
                </div>
            </div>
        </div>
    )
}

export default OtpVarification