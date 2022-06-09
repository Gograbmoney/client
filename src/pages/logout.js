
import React, { useEffect } from 'react'
//  import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
//  import { UserContext } from '..//App'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "..//actions/userActions"


const Logout = () => {
    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.user)
    //    const {dispatch} = useContext(UserContext)
    let navigate = useNavigate();
    useEffect(() => {
        // https://server-gograbmoney.herokuapp.com
        //  fetch('https://server-gograbmoney.herokuapp.com/api/v1/logout', {
        //      method: "GET",
        //      credentials : "include",
        //      headers: {"Content-Type" : "application/json" },     

        //  }).then((res)=>{
        //     console.log("logout successfully")
        //           dispatch({ type: "USER" , payload: false })
        //           navigate('/', { replace: true })

        //           if(res.status !== 200){
        //               throw new Error('Not logged out')
        //           }
        //  }).catch((err)=>{
        //      console.log(err);
        //  })
        dispatch(logout());
        navigate("/");

    })
    return (
        <div>
        </div>
    )
}

export default Logout
