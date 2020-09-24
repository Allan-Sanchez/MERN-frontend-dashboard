import React, { useState,useContext } from "react";
import {Link} from 'react-router-dom';
import AlertContext from "../../context//alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

const Login = () => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;


  const authContext = useContext(AuthContext);
  const {userLogin,message,authenticated} = authContext;

    
    const [saveUser,SetSaveUser] = useState({
        email:'',
        password:''
    });

    const {email,password} = saveUser;
    
    const saveInput = (e) =>{
        SetSaveUser({
            ...saveUser,
            [e.target.name]:e.target.value
        })
    };

    const handleUser = (e) =>{
        e.preventDefault()

        if (email.trim() === '' || password.trim() ==='') {
          showAlert('All input is required','bg-red-500');
          return;
        }
        userLogin({email,password});
    };
 
 
    return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-200">
      {alert ? (
        <div className="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-10">
          <div className={`flex justify-center items-center w-12 ${alert.category}`}>
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
            </svg>
          </div>

          <div className="-mx-3 py-2 px-4 ">
            <div className="mx-3">
              <span className="text-red-500 font-semibold">Error</span>
              <p className="text-gray-600 text-sm">
                {alert.msg}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleUser}>
            <h3 className="text-center text-3xl mb-5 font-semibold text-gray-700">Login</h3>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" autoFocus
              type="email" name="email"
              placeholder="Username"
              onChange={saveInput} value={email}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" name="password"
              type="password"
              placeholder="******************"
              onChange={saveInput} value={password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <h5 className="text-gray-600 text-center">
           If you don't have an account yet. Please register <Link to={"/register"} className="text-gray-800 font-semibold">here</Link> 
        </h5>
      </div>
    </div>
  );
};

export default Login;
