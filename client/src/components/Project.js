import React from 'react'
import './Project.css';
import AddTask from './AddTask'

function Project(props) {
    return (
         <th className="projectName"colSpan="5">
             {props.projectname} 
                <AddTask 
                handleFormSubmit= {props.handleFormSubmit} 
                changeHandler= {props.changeHandler}
                newTask = {props.newTask}
                newBudget = {props.newBudget}
                />
        </th>  
    );
}

export default Project;