import React,{useState, useEffect} from "react";
import TasKContext from "../../context/tasks/TaskContext";
import { useContext } from "react";

const FormProject = ({id}) => {

  const taskContext = useContext(TasKContext);
  const {currentTask, addTask, showError, getTasks, updateTask, cleanTask} = taskContext;

// useefect
  useEffect(() => {
    if (currentTask !== null) {
      setTask(currentTask);
    }else{
      setTask({
        name:''
      })
    }
  }, [currentTask])



  const[task, setTask] = useState({
      name:'',
  })
  const {name} = task;

  const onChangeTask = (e) =>{
      setTask({
          ...task,
          [e.target.name]: e.target.value
      })
  }
  const handleTask = (e) =>{
      e.preventDefault();

      // validated form
      if (name.trim() === '') {
        showError('task name is necessary')
        return;
      }

      // checking is new task
      if (currentTask === null) {
        
        task.projectId = id;
        task.state = false
        // new task added
        addTask(task);
      }else{
        // update task 
        updateTask(task);
        // clean task
        cleanTask()
      }


      // list new task
      getTasks(id)

      // clean task
      setTask({
        name:''
      });

  }
    return (
    <form action="" onSubmit={handleTask} className=" max-w-xs mx-auto pt-5">
      <div className="mb-3 pt-0">
        <input
          type="text"
          name="name" value={name} onChange={onChangeTask}
          placeholder="types task" autoFocus
          className="px-3 py-3 placeholder-gray-600 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full mb-2"
        />
        <button
          className="w-full bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="submit"
          style={{ transition: "all .15s ease" }}
        >
          {currentTask ? 'Edit Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default FormProject;
