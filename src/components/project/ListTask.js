import React from 'react';
import Tasks from "./Tasks";

import TaskContext from "../../context/tasks/TaskContext"
import { useContext } from 'react';

const ListTask = () => {
    
    const taskContext = useContext(TaskContext);
    const {tasksProject} = taskContext;
    // console.log(tasksProject);
    // const tasks = [ ] ;
    
    return ( 
       <div className="max-w-2xl mx-auto mt-10">
           <ul className="">
               {
                tasksProject.length === 0
                ?(<li> <p className="text-gray-700 py-2 text-2xl text-center font-bold">no task</p> </li>)
                : tasksProject.map(task =>(
                    <Tasks key={task.id} task={task}></Tasks>
                ))
               }
           </ul>
       </div>
     );
}
 
export default ListTask;