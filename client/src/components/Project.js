import React from 'react'
import './Project.css';
import AddTask from './AddTask';


function Project(props) {
    return (
         <th className="projectName"colSpan="5"> {props.projectname} <AddTask /></th>  
    );
}

export default Project;