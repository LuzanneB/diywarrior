import React from 'react'
import DoSomething from './DoSomething';


function ProjectTask(props) {
    return (
        <tr>
            <th class= "id" scope="row"> {props.id} </th>
            <td class= "task">{props.task}</td>
            <td class= "budget">{props.budget}</td>
            <td class= "actualSpend">{props.actualspend}</td>
            <DoSomething />
        </tr>

  
    );
}

export default ProjectTask;