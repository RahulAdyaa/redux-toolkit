import React from "react";
// lohgout ke baad kuch na kuch action lena padega , kuch na kuch dispatch krna padega

import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    //;logout in itself is a promise , check appwrite/auth.js
    authService
      .logout()
      .then(() => {
        dispatch(logout);//dispatcheed logout info so that stroe ke andar info updated rhe
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={logoutHandler}>Logout</button>
  )

}

export default LogoutBtn;
