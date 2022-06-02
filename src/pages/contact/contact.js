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
            const res = await fetch('https://server-gograbmoney.herokuapp.com/api/v1/me', {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json();
            console.log(data);
            setuserdata({ ...userdata, name: data.user.name, email: data.user.email, mobile: data.user.mobile })

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
        const res = await fetch('https://server-gograbmoney.herokuapp.com/api/v1/contact', {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, mobile, message })
        })

        const data = await res.json()
        if (!data) {
            alert(`Message not sent!!!\n${data.message}`)
            console.log('Message not sent');
        }
        else {
            alert(`Message Delivered Successfully !!!\n${data.message}`)
            setuserdata({ ...userdata, message: '' })
        }
    }

    return (
        <div>
            <div className='contact-body'>
                <div className="contact-container " >
                    <div className="contact-form">
                        <h3 className='my-3'> Get in touch</h3>
                        <hr className='w-100' />
                        <form className='mt-3' method='POST' onSubmit={SubmitNewData}>
                            <div className="data-field-input-container">
                                <input type='text' value={userdata.name} name='name' onChange={handleInputs} placeholder='your name' required='true' className='form-control ' autoComplete="off"/>
                                <input type='email' value={userdata.email} name='email' onChange={handleInputs} placeholder='your email' required='true' className='form-control ' autoComplete="off"/>
                                <input type='number' value={userdata.mobile} name='mobile' onChange={handleInputs} placeholder='mobile no.' required='true' className='form-control mb-3' autoComplete="off"/>
                            </div>
                            <div className='form-floating '>
                                <textarea value={userdata.message} onChange={handleInputs} name='message' placeholder='Write your message' className='form-control mb-3 form-message' />
                            </div>
                            <button type="submit"  className="btn btn-submit btn-small "> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;