import * as React from 'react';
import {useState} from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./register.css"
import signUpImage from "..//..//image/signup-image.jpg"
import { MdAccountCircle } from "react-icons/md"
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri"
import { FaEnvelope, FaMobileAlt, FaHandshake } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Register = () => {
    let navigate = useNavigate();
    const [user, setuser] = useState({
        name:'',
         email:'',
        work:'',
        mobile:'',
        password:'',
        cpassword:''
    })
     let name, value;
    const [notChecked, setChecked] = useState(false);
    const handleInput =(e)=>{
       name = e.target.name
       value = e.target.value
       
       setuser({...user, [name]:value})
    }

    const Postdata = async (e)=>{
      e.preventDefault()
      const {name,email,mobile, work, password,cpassword} = user;

      if(notChecked === true){
        const res = await fetch("https://gograbmoney-server.herokuapp.com/register", {
            method: "POST",
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify({ name, user, email, mobile,work, password, cpassword })
          })
            const data = await res.json()
            if( res.status === 400 || !data ){
                 window.alert('Invalid registration failed')
                 console.log('Invalid registration failed')
            }
            else{
              window.alert('registration success')
              console.log('registration success')
              navigate('/login')
            }
      }else{
                   window.alert("Please click the checkBox");
      }
    }
    return (
        <div>
           
            <Header />
            <div className='register-container'>
                <div class="signup-form-container">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method='POST' class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><MdAccountCircle /></label>
                                <input type="text" name="name" value={user.name} id="name" placeholder="User Name" onChange= {handleInput} autoComplete="off"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><FaEnvelope /></label>
                                <input type="email" name="email" value={user.email} id="email" placeholder="Your Email" onChange= {handleInput} autoComplete="off"/>
                            </div>
                            <div class="form-group">
                                <label for="text"><FaMobileAlt /></label>
                                <input type="text" name="mobile" value={user.mobile} id="mobile" placeholder="Your Mobile Number" onChange= {handleInput} autoComplete="off"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><RiLockPasswordFill /></label>
                                <input type="password" name="password" value={user.password} id="pass" placeholder="Password" onChange= {handleInput} autoComplete="off"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><RiLockPasswordLine /></label>
                                <input type="password" name="cpassword" value={user.cpassword} id="re_pass" placeholder="Repeat your password" onChange= {handleInput} autoComplete="off"/>
                            </div>
                            {/* <div class="form-group">
                                <label for="refferal"><FaHandshake /></label>
                                <input type="text" name="refferal" id="refferal" placeholder="Refferal Code (Optional)" />
                            </div> */}
                            <div class="label-agree-term">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" defaultChecked={notChecked}  onChange={() => setChecked(!notChecked)}/>
                                <label for="agree-term" ><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class=" form-button" >
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register" onClick={Postdata}/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <img src={signUpImage} alt="" className='sign-up-image'/>
                        <Link to="/login" class="signup-image-link">I am a already member</Link>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default Register;
