import React, { useState } from "react";
import {Link} from 'react-router-dom';
const Login = () => {
    
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
    };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
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
