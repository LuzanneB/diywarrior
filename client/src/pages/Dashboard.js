import React, {Component} from 'react';
import Project from '../components/Project';
import ProjectTask from '../components/ProjectTask';
// import { Link } from "react-router-dom";
import API from '../utils/API';


class Dashboard extends Component {
  state = {
    projectBoard:[]
  };

  componentDidMount(){
    this.loadProjects();

  }

  loadProjects= () => {
    API.getProjects()
      .then(res =>
        this.setState({projectBoard:res.data, projectname:""})
        )
        .catch(err => console.log(err));
  };
  render() {
    {console.log("This is it yes", this.state.projectBoard)}
    return (
<div>  
     <div>
      
        <div>
          <table className="table table-hover text-center projectTable mx-auto border">
          <thead>
           
                  <tr><Project projectname ={"My First Project"} />
                  
                  </tr>
                  <tr>
                      <th>ID</th>
                      <th>Task</th>
                      <th>Budget</th>
                      <th>Actual Spend</th>
                      <th>Edit</th>
                  </tr>
              </thead>
          {this.state.projectBoard.map(project => (
  
            
              <tbody
                key = {project._id}>     
                  <ProjectTask
                  key = {project._id}
                  task = {project.task}
                  budget = {project.budget}
                  id = {project._id}
                  actualspend = {project.actualspend}    
                  />
              </tbody>
            
          ))}
        </table>
        </div>
       
    </div>
</div>
// end retun & render
  )}
  // end component
};


export default Dashboard;