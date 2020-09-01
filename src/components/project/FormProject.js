import React,{useState} from "react";

const FormProject = () => {
  
  const[task, setTask] = useState({
      nameTask:''
  })
  const {nameTask} = task;

  const onChangeTask = (e) =>{
      setTask({
          ...task,
          [e.target.name]: e.target.value
      })
  }
  const handleTask = (e) =>{
      e.preventDefault();
      console.log('from form');
    //   validated form


    // clean form
  }
    return (
    <form action="" onSubmit={handleTask} className=" max-w-xs mx-auto pt-5">
      <div className="mb-3 pt-0">
        <input
          type="text"
          name="nameTask" value={nameTask} onChange={onChangeTask}
          placeholder="types task"
          className="px-3 py-3 placeholder-gray-600 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full mb-2"
        />
        <button
          className="w-full bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="submit"
          style={{ transition: "all .15s ease" }}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default FormProject;
