import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email, setemail] = useState({
        email:""
    });
    let statusEl = document.getElementById("status-element");
    let name, value;
    const handleInput = (e) => {
        name = e.target.name
        value = e.target.value

        setemail({ ...email, [name]: value })
    }


    const submitForgetPassword = async (e) => {
        e.preventDefault();
        statusEl.textContent = "";
        //console.log(email);
        const res = await fetch('https://server-gograbmoney.herokuapp.com/api/v1/password/forgot', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email})
        })

        const data = await res.json()
        //console.log(data)
        if (res.status === 200) {
            statusEl.textContent = data.message;
            statusEl.style.color = "green";
        }
        else {

            statusEl.textContent = data.error;
            statusEl.style.color = "red";
        }
    }
    return (
        <div className="login-container">
            <div className='login-form-container forgetPassword'>
                <h1>Forget Password</h1>
                <span>You can reset your password here </span>
                <form method='POST' onSubmit={submitForgetPassword}>
                    <input type="text" name="email" value={email.email}  placeholder="Enter your email address.." className="" onChange={handleInput} />
                    <p id='status-element'></p>
                    <button >Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword