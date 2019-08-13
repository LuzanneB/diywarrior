import React from 'react'
import DoSomething from './DoSomething';


function ProjectTask() {
    return (
        <tr>
            <th class= "id" scope="row"> id </th>
            <td class= "task">task</td>
            <td class= "budget">budget</td>
            <td class= "actualSpend">actual spend</td>
            <DoSomething />
        </tr>

  
    );
}

export default ProjectTask;