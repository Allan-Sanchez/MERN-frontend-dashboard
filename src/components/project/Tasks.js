import React from "react";
import ProjectContext from "../../context/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";
import { useContext } from "react";

const Tasks = ({ task }) => {

  const projectContext = useContext(ProjectContext);
  const {project} = projectContext;

  const taskContext = useContext(TaskContext);
  const {deleteTask, getTasks} = taskContext;

  const [currentProject] = project;
  const deleOneTask =(id) =>{
    deleteTask(id);
    getTasks(currentProject.id)
  };

  return (
    <li className="bg-gray-100 text-gray-700 py-3 mb-4 px-10 flex justify-between shadow-md">
      <div>
        <span>{task.name}</span>
      </div>

      <div className="flex items-center">
      {task.state ? (
        <div className="bg-blue-200 py-1 px-2 rounded text-blue-700 font-semibold">
          completed
        </div>
      ) : (
        <div className="bg-red-200 py-1 px-2 rounded text-red-700 font-semibold">
          Incomplete
        </div>
      )}
        <button
          className="ml-5 bg-gray-700 text-white  font-semibold px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none "
          type="button"
          style={{transition: "all .15s ease"}}
        >
          Edit
        </button>

        <button
          onClick={() =>deleOneTask(task.id)}
          className="ml-2 bg-gray-200 text-gray-700  font-semibold px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none "
          type="button"
          style={{transition: "all .15s ease"}}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Tasks;
