import React from 'react';

function DoSomething() {
    return (
        <td>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="edit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Do Something</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Complete</button>
                    <button className="dropdown-item" type="button">Edit</button>
                    <button className="dropdown-item" type="button">Delete</button>
                </div>
            </div>
        </td>
    );
}

export default DoSomething;