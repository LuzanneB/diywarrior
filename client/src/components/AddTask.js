import React from 'react';

function AddTask() {
    return (
        // <!-- Button trigger modal -->
        <div>
            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#addTask">
                Add a Task
            </button>

            <div className="modal fade" id="addTask" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add a Task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label >Task</label>
                                    <input type="text" className="form-control" id="newTask" aria-describedby="newTask"
                                        placeholder="Task"></input>
                                </div>
                                <div className="form-group">
                                    <label >Budget for Task</label>
                                    <input type="budget" className="form-control" id="newBudget" placeholder="Budget"></input>
                                </div>
                                <button type="submit" className="btn btn-primary" id="submitTask">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Nevermind!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTask;