import React from 'react'
import ProjectTask from './ProjectTask';
import './Project.css';
import AddTask from './AddTask';


function Project() {
    return (
        <table className="table table-hover text-center projectTable mx-auto border">
            <thead>
                <tr>
                    <th className="projectName"colspan="5">projectname <AddTask /></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Budget</th>
                    <th>Actual Spend</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <ProjectTask />
            </tbody>
        </table>

    );
}

export default Project;