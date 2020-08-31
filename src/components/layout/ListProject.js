import React from "react";

const ListProject = ({project}) => {
  return (
    <li className="mb-2">
      <button className="w-full">
        <span className="w-full text-md font-semibold inline-block py-1 px-2 uppercase rounded text-gray-700 bg-gray-100  last:mr-0 mr-1">
          {project.name}
        </span>
      </button>
    </li>
  );
};

export default ListProject;
