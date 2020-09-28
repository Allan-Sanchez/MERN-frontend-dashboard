import React from "react";
import Hamburger from "../../Hamburger.svg";
import AuthContext from "../../context/auth/AuthContext";
import { useContext, useEffect } from "react";

const MenuBar = () => {
  const authContext = useContext(AuthContext);
  const { user, userCurrently, userLogout } = authContext;

  useEffect(() => {
    userCurrently();
  }, []);

  return (
    <div className="bg-gray-800 w-full h-20 flex justify-between items-center px-5 pr-10">
      <div className="flex items-center">
        <div className="h-full">
          <img
            className="h-10 fill-current text-teal-500"
            src={Hamburger}
            alt=""
          />
        </div>
        {user ? (
          <h1 className="text-gray-400 text-2xl font-bold pl-10">
            Hello <span className="text-gray-200">{user.name}</span>{" "}
          </h1>
        ) : null}
      </div>
      <div>
        <button
          className="bg-gray-400 text-gray-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button" onClick={ () => userLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
