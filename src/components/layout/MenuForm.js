import React, { useState, useContext } from "react";
import ProjectContext from "../../context/ProjectContext";

const MenuForm = () => {
  // get state ot the form

  const projectsContext = useContext(ProjectContext);
  const { formNew,openForm } = projectsContext;

  const [project, setProject] = useState({
    nameProject: "",
  });
  const { nameProject } = project;

  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleProject = (e) => {
    e.preventDefault();

    // form validad

    // add state

    //clean form
    console.log("dentro del formulario");
  };
  return (
    <div className="mt-5">
      <button
        className="bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        type="button" onClick={() => openForm()}
      >
        New Project
      </button>

      {formNew ? (
        <div className="mt-5">
          <form onSubmit={handleProject}>
            <div className="mb-3 pt-0">
              <input
                type="text" autoFocus
                name="nameProject"
                placeholder="Project name"
                onChange={onChangeProject}
                value={nameProject}
                className="px-3 py-3 placeholder-gray-600 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <button
              className="bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
              type="submit"
            >
              Add Project
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default MenuForm;
