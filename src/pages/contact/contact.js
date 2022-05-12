import React ,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "..//..//components/header/header";
import Footer from "..//..//components/footer/footer";
import "./contact.css"
const Contact = () => {
    const navigate = useNavigate()
    const [userdata, setuserdata] = useState({
        name:'',
        email:'',
        mobile:'',
        message:''
    }) 

    const callContact = async () =>{    
       try{
            const res = await fetch('http://localhost:5000/getdata', {
                method: "GET",
                credentials : "include",
                headers: {
                    "Content-Type": "application/json",
                }
                 })  
                const data = await res.json();
                setuserdata({...userdata, name:data.name, email:data.email, mobile:data.mobile})
   
                if(!res.status === 200){
                    const error = new Error(res.error)
                    throw error;
                }                                                                           
          }
          catch(err){
                console.log(err)
                navigate('/login')        
                }
    }  
     useEffect(() => {   
       callContact()
     },[])

    // storing data in contact us form 

 const handleInputs = (e)=>{
   
    const name = e.target.name;
    const value = e.target.value 

    setuserdata({...userdata, [name]:value })

 }
  // Submitting the new data to backend

 const SubmitNewData = async (e)=>{
     e.preventDefault()
    const {name, email, mobile, message} = userdata
    const res= await fetch('http://localhost:5000/contact', {
        method:"POST",
        credentials : "include",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({ name , email, mobile, message })
    })

    const data = await res.json()
    if(!data ){
        console.log('Message not sent');
    }
    else{
        alert('Message Delivered Successfully !!!')
        setuserdata({...userdata, message:''})
    }
 }

    return (
        <div>
            <Header/>
         <div className='contact-body'>
         <div className='kee contact-container'>
           <div className="container-fluid koo ">
               <div className="row">
                   <div className="col-lg-11 col-md-11 col-10 mx-auto datases" style={{display:'inline-flex'}}>
                              <div className='col-md-4 col-lg-4 d-flex justify-content-start text-center heroe'  style={{width:'25rem'}}>
                                  {/* <img src={}  alt="hi" className='img-fluid' style={{width:'90px'}}/> */}
                              <div className='mx-3 mt-3'>
                                  Phone Number
                                  <div className='my-2'>
                                  +012-345-6789
                              </div>
                              </div></div>
                              <div className='col-md-4 col-lg-4 d-flex justify-content-start text-center mx-5 heroe' style={{width:'30rem'}}>
                                  {/* <img src={} alt='s' className='img-thumbnail' style={{width:'90px'}}/> */}
                              <div className='mx-2 mt-3'>
                                  Email
                                  <div className='my-2'>
                                  support@gograbmoney.com
                              </div>
                              </div></div>
                              <div className='col-md-4 col-lg-4 d-flex justify-content-start text-center heroe' style={{width:'25rem'}}>
                                  {/* <img src={} alt="hi" className='img-fluid' style={{width:'75px'}}/> */}
                              <div className='mx-2 mt-3'>
                                  Address
                                  <div className='my-2'>
                                  V/P Jalalpur Bhaggu Bikapur , Ayodhya, India
                              </div>
                              </div></div>
                   </div>
               </div>
           </div>
           <div className="container contact2 heroe" >
               <div className="row">
                   <div className="col-lg-8 col-md-8 col-10 mx-auto">
                       <div className="contact-form">
                                <h3 className='my-3'> Get in touch</h3>
                                <hr className='w-100'/>
                                <form className='mt-3' method='POST' style={{width:'100%'}}>
                                    <div className="d-flex justify-content-between align-items-center mx-auto">
                                <input type='text' value={userdata.name}  name='name' onChange={handleInputs}  placeholder='your name' required='true' className='form-control mx-2 ' style={{width:'150px'}} />
                                <input type='email' value={userdata.email} name='email' onChange={handleInputs} placeholder='your email' required='true' className='form-control mx-2' style={{width:'600px'}}/>
                                <input type='number' value={userdata.mobile} name='mobile' onChange={handleInputs}  placeholder='mobile no.' required='true' className='form-control mx-2 ' style={{width:'140px'}}/>
                                    </div>
                                    <div className='form-floating mt-3'>
                                    <textarea value={userdata.message} onChange={handleInputs} name='message'  placeholder='Write your message' className='form-control mb-3' style={{height:'220px'}} />
                                    </div>
                                    <button type="submit" onClick={SubmitNewData} className="btn btn-submit btn-small mt-2 mb-3 justify-content-start"> Submit </button>
                                </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
         </div>
        <Footer/>
        </div>
      );
}
 
export default Contact;