import React from "react";
import Menu from "../layout/Menu";
import MenuBar from "../layout/MenuBar";
import FormProject from "./FormProject";
import ListTask from "./ListTask";

const Proyect = () => {
  return (
    <div className="flex bg-gray-200">
      <Menu></Menu>
      <div className="w-full">
        <MenuBar></MenuBar>
        <div className="pt-10 bg-gray-200">
          <div className="max-w-xs mx-auto flex justify-between">
            <h2 className="text-center text-2xl text-gray-700 font-bold">
                Virtual Shop
            </h2>
            <div>
              <button
                className="bg-red-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                type="button"
                style={{transition: "all .15s ease"}}
              >
                Delete
              </button>
            </div>
          </div>
          <FormProject></FormProject>

          <ListTask></ListTask>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
