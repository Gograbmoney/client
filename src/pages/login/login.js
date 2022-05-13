import React , { useContext ,useState } from 'react';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./login.css"
import { MdAccountCircle } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { FaFacebookSquare, FaTwitter } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import signInImage from "..//..//image/signin-image.jpg"
import { Link ,useNavigate} from 'react-router-dom';
import { UserContext } from '..//..//App';
const Login = () => {
    let errorEl = document.getElementById("error-login");
    let successEl = document.getElementById("success-login");
      // for clicking login logout button
      const { dispatch } = useContext(UserContext)

      const navigate = useNavigate();
      const [data, setdata] = useState({
          email:'',
          password:''
      })
        let name, value;
       const handleLogin =(e)=>{
             name= e.target.name
             value=e.target.value
  
             setdata({...data, [name]: value})
       }
  
      const PostLogin = async (e)=>{
          e.preventDefault()
          const { email, password}  = data
          const res= await fetch("https://gograbmoney-server.herokuapp.com/signin", {
              method: "POST",
              credentials : "include",
              headers:{"Content-Type" : "application/json "},
              body: JSON.stringify({ email, password})
          })
          const datas = await res.json()
          if(!datas || res.status === 400){
                   errorEl.textContent = "Invalid Credentials......";
                   console.log('Login Failed')
          }
          else{
              dispatch({ type: "USER", payload : true })
                   successEl.textContent = "Login success.....";
                   console.log('Login success')
                navigate('/')
          }
      }
  return (
    <div>
      <Header />
      <div className='login-container'>
        <div className='login-form-container'>
          <div class="login-image">
            <figure><img src={signInImage} alt="" className='sign-in-image' /></figure>
            <Link to="/register" class="signup-image-link">Create an account</Link>
          </div>
          <div class="login-form">
            <h2 class="form-title">Log In</h2>
            <form method="POST" class="register-form" id="login-form">
            <p id='error-login'></p>
            <p id='success-login'></p>
              <div class="form-group">
                <label for="your_name"><MdAccountCircle /></label>
                <input type="text" value={data.email} name='email' onChange={handleLogin} id="your_name" placeholder="your email" autoComplete="off"/>
              </div>
              <div class="form-group">
                <label for="your_pass"><RiLockPasswordFill /></label>
                <input type="password" value={data.password} name='password' onChange={handleLogin}  id="your_pass" placeholder="your password" autoComplete="off"/>
              </div>
              {/* <div >
                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                <label for="remember-me" class="label-agree-term">Remember me</label>
              </div> */}
              <div class=" form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" onClick={PostLogin}/>
              </div>
            </form>
            <div class="social-login">
              <span class="social-label">Or login with</span>
              <div>
                <a href="#"><FaFacebookSquare /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FcGoogle /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
