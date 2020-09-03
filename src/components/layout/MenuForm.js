import React, { useState, useContext } from "react";
import ProjectContext from "../../context/ProjectContext";

const MenuForm = () => {
  // get state ot the form

  const projectsContext = useContext(ProjectContext);
  const { formNew, errorForm, openForm, addProject,showError } = projectsContext;

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
    if (nameProject === "") {
      showError();
      return;
    }
    // add state
    addProject(project);

    //clean form
    setProject({
      nameProject: "",
    });
    console.log("dentro del formulario");
  };
  return (
    <div className="mt-5">
      <button
        className="bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        type="button"
        onClick={() => openForm()}
      >
        New Project
      </button>

      {formNew ? (
        <div className="mt-5">
          <form onSubmit={handleProject}>
            <div className="mb-3 pt-0">
              <input
                type="text"
                autoFocus
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

      {errorForm ? (
        <div className=" my-2 flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-center items-center w-12 bg-red-500">
          <svg
            className="h-6 w-6 fill-current text-white"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
          </svg>
        </div>

        <div className="-mx-3 py-2 px-4">
          <div className="mx-3">
            {/* <span className="text-red-500 font-semibold">Error</span> */}
            <p className="text-gray-700 text-sm">Project name is required!</p>
          </div>
        </div>
      </div>
      ):null}

      
    </div>
  );
};

export default MenuForm;
