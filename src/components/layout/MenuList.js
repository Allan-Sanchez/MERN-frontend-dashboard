import React from 'react'
import ListProject from "./ListProject";

const MenuList = () => {
    const projects = [
        {name:"virtual shop"},
        {name:"intranet"},
        {name:"Desinger your own web"}
    ]
    return (  
        <ul>
            {projects.map(project =>(
                <ListProject  project={project}></ListProject>
            ))}
        </ul>
    );
}
 
export default MenuList;