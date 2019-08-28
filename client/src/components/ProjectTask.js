import React from 'react'
import DoSomething from './DoSomething';


function ProjectTask(props) {
    return (
        <tr>
            <th className= "id" scope="row"> {props.id} </th>
            <td className= "task">{props.task}</td>
            <td className= "budget">{props.budget}</td>
            <td className= "actualSpend">{props.actualspend}</td>
            <DoSomething 
                handleComplete={props.handleComplete} 
            />
        </tr>

  
    );
}

export default ProjectTask;