import React from 'react'
import DoSomething from './DoSomething';


function ProjectTask() {
    return (
        <tr>
            <th class= "id" scope="row">ID</th>
            <td class= "task">demo the kitchen</td>
            <td class= "budget">$500</td>
            <td class= "actualSpend">0</td>
            <DoSomething />
        </tr>

  
    );
}

export default ProjectTask;