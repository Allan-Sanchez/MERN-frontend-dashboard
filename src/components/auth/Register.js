import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [saveUser, SetSaveUser] = useState({
    userName:"",
    email: "",
    password: "",
    confirmPassword:""
  });

  const { userName, email, password ,confirmPassword} = saveUser;

  const saveInput = (e) => {
    SetSaveUser({
      ...saveUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleUser = (e) => {
    e.preventDefault();

    // validar input

    // validar password min 6 caracters

    // validar password and confirmar password
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-2xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleUser}
        >
          <h3 className="text-center text-3xl mb-5 font-semibold text-gray-700">
            Register
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" name="userName"
                autoFocus
                type="text"
                placeholder="Username"
                onChange={saveInput}
                value={userName}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" name="email"
                autoFocus
                type="email"
                placeholder="Username"
                onChange={saveInput}
                value={email}
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
                onChange={saveInput}
                value={password}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword" name="confirmPassword"
                type="password"
                placeholder="******************"
                onChange={saveInput}
                value={confirmPassword}
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          
          </div>
        </form>
        <h5 className="text-gray-600 text-center">
          If you have an account yet. Please go to 
          <Link to={"/"} className="text-gray-800 font-semibold ml-2">
            Login
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
