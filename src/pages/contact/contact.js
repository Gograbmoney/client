import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "..//..//components/header/header";
import Footer from "..//..//components/footer/footer";
import { AiFillPhone, AiOutlineMail, AiFillHome } from "react-icons/ai"
import "./contact.css"
const Contact = () => {
    const navigate = useNavigate()
    const [userdata, setuserdata] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })

    const callContact = async () => {
        try {
            const res = await fetch('https://gograbmoney-server.herokuapp.com/getdata', {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json();
            setuserdata({ ...userdata, name: data.name, email: data.email, mobile: data.mobile })

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }
        }
        catch (err) {
            console.log(err)
            navigate('/login')
        }
    }
    useEffect(() => {
        callContact()
    }, [])

    // storing data in contact us form 

    const handleInputs = (e) => {

        const name = e.target.name;
        const value = e.target.value

        setuserdata({ ...userdata, [name]: value })

    }
    // Submitting the new data to backend

    const SubmitNewData = async (e) => {
        e.preventDefault()
        const { name, email, mobile, message } = userdata
        const res = await fetch('https://gograbmoney-server.herokuapp.com/contact', {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, mobile, message })
        })

        const data = await res.json()
        if (!data) {
            console.log('Message not sent');
        }
        else {
            alert('Message Delivered Successfully !!!')
            setuserdata({ ...userdata, message: '' })
        }
    }

    return (
        <div>
            <Header />
            <div className='contact-body'>
                <div className="contact-container " >
                    <div className="contact-form">
                        <h3 className='my-3'> Get in touch</h3>
                        <hr className='w-100' />
                        <form className='mt-3' method='POST'>
                            <div className="data-field-input-container">
                                <input type='text' value={userdata.name} name='name' onChange={handleInputs} placeholder='your name' required='true' className='form-control ' autoComplete="off"/>
                                <input type='email' value={userdata.email} name='email' onChange={handleInputs} placeholder='your email' required='true' className='form-control ' autoComplete="off"/>
                                <input type='number' value={userdata.mobile} name='mobile' onChange={handleInputs} placeholder='mobile no.' required='true' className='form-control mb-3' autoComplete="off"/>
                            </div>
                            <div className='form-floating '>
                                <textarea value={userdata.message} onChange={handleInputs} name='message' placeholder='Write your message' className='form-control mb-3 form-message' />
                            </div>
                            <button type="submit" onClick={SubmitNewData} className="btn btn-submit btn-small "> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;