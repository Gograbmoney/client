import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    //console.log(token)
    let passworddetailEl = document.getElementById("reset-password-details-update");
    const [passworddata, setpassworddata] = useState({
        password: "",
        cpassword: ""
    });

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setpassworddata({ ...passworddata, [name]: value });
    }

    const submitPasswordDetails = async (e) => {
        try {
            e.preventDefault();
            passworddetailEl.textContent = "";
            const { password, cpassword } = passworddata
            if(!password||!cpassword) {
                passworddetailEl.textContent = "New password and Confirm password can not be empty  !!!";
                passworddetailEl.style.color = "red";
            }else{

                if((password === cpassword)) {
                    const res = await fetch(`https://server-gograbmoney.herokuapp.com/api/v1/password/reset/${token}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ password, cpassword })
                    });
                      const data = await res.json()
                      console.log(data)
                    if (res.status === 200) {
                          passworddetailEl.style.color = "green";
                          passworddetailEl.textContent = data.message;
                          alert(`${data.message}\nGo to login screen...`);
                          navigate("/login");
                          
                    } else {
                          passworddetailEl.textContent = data.error;
                          passworddetailEl.style.color = "red";
                          alert(`${data.error} \nPlease send reset request again.`);
                          navigate("/forgetpassword");
                    }
                }
                else {
                    passworddetailEl.textContent = "New password and Confirm password did not match !!!";
                    passworddetailEl.style.color = "red";
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <div className='login-form-container resetPassword'>
                <h1>Reset Password</h1>
                <form method="PUT" onSubmit={submitPasswordDetails}>
                    <label for="new_password1">New Password:</label><br />
                    <input className="account-details-form form-control " type="password" id="new_password1" name="password" value={passworddata.password} autoComplete="off" onChange={handleInputs} /><br />
                    <label for="confirm_password1">Confirm Password:</label><br />
                    <input className="account-details-form form-control " type="password" id="confirm_password1" name="cpassword" value={passworddata.cpassword} autoComplete="off" onChange={handleInputs} /><br />

                    <input type="submit" name="submit"  class="button button-primary submit-password-details1" value="Reset" />
                    <p id="reset-password-details-update" ></p>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword