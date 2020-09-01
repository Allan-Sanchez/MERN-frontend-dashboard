import React from "react";
import MenuForm from "./MenuForm";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <div className=" bg-gray-300  max-w-sm p-10">
      <div className="w-full">
        <h1 className="text-gray-900 font-extrabold text-4xl">
          MERN
          <span className="text-gray-700">Tasks</span>
        </h1>
      </div>
      <MenuForm></MenuForm>
      <div>
        <h3 className="text-gray-700 text-2xl mt-10 text-center font-bold mb-5">
          Your Project
        </h3>
        <MenuList></MenuList>
      </div>
    </div>
  );
};

export default Menu;
