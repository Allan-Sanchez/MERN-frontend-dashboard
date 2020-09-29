import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context//alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const {userRegister,message,authenticated} = authContext;

  // when user there was authenticated
  useEffect(() => {
    if (authenticated) {
      props.history.push('/project');
    }
    if (message) {
      showAlert(message.msg,message.category);
    }
        //eslint-disable-next-line
  },[message,authenticated,props.history])

  const [saveUser, SetSaveUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = saveUser;

  const saveInput = (e) => {
    SetSaveUser({
      ...saveUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleUser = (e) => {
    e.preventDefault();
   
    // validar input
    if(email.trim() === '' || name.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''){
      showAlert('all the inputs are required','bg-red-500');
      return;
    }

    // validar password min 6 caracters
    if(password.length < 6){
      showAlert('the password must be at least 6 characters','bg-red-500');
      return;
    }

    // validar password and confirmar password
    if(password !== confirmPassword){
      showAlert('the password must be the same','bg-red-500');
      return;
    }

    userRegister({
      name,
      email,
      password,
    })


  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-200">
      {alert ? (
        <div className="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden ">
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

      <div className="w-full max-w-2xl mt-10">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
                id="username"
                name="name"
                autoFocus
                type="text"
                placeholder="type your name"
                onChange={saveInput}
                value={name}
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
                id="email"
                name="email"
                type="email"
                placeholder="type your emial"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
                id="password"
                name="password"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
                id="confirmPassword"
                name="confirmPassword"
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
