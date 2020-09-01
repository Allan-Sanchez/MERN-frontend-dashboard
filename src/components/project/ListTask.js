import React from 'react';
import Tasks from "./Tasks";


const ListTask = () => {
    
    const tasks = [
        {name:"choose platform", state:true},
        {name:"choose color", state:false},
        {name:"choose color", state:false},
        {name:"choose color", state:false},
        {name:"choose page of platform", state:true},
        {name:"choose hosting", state:false},
    ] 
    
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