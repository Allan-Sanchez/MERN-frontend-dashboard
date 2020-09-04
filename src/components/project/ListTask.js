import React from 'react';
import Tasks from "./Tasks";


const ListTask = () => {
    
    const tasks = [ ] 
    
    return ( 
       <div className="max-w-2xl mx-auto mt-10">
           <ul className="">
               {
                tasks.length === 0
                ?(<li> <p>no task</p> </li>)
                : tasks.map(task =>(
                    <Tasks task={task}></Tasks>
                ))
               }
           </ul>
       </div>
     );
}
 
export default ListTask;