
 import React, { useEffect } from 'react'
 import { useContext } from 'react'
 import { useNavigate} from 'react-router-dom'
 import { UserContext } from '..//App'
  
 
  const Logout = () => {
      
       const {dispatch} = useContext(UserContext)
      let navigate = useNavigate();
     useEffect(()=>{
        // https://gograbmoney-server.herokuapp.com
         fetch('https://gograbmoney-server.herokuapp.com/api/v1/logout', {
             method: "GET",
             credentials : "include",
             headers: {"Content-Type" : "application/json" },     
         
         }).then((res)=>{
            console.log("logout successfully")
                  dispatch({ type: "USER" , payload: false })
                  navigate('/', { replace: true })
                  
                  if(res.status !== 200){
                      throw new Error('Not logged out')
                  }
         }).catch((err)=>{
             console.log(err);
         })
     })
      return (
          <div>
          </div>
      )
  }
  
  export default Logout
  