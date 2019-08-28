import React, {Component} from 'react';
import Project from '../components/Project';
import ProjectTask from '../components/ProjectTask';
// import { Link } from "react-router-dom";
import API from '../utils/API';



class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
    projectBoard:[],
    formControls: {
      newTask:{
        value: ""
      },
     newBudget:{
        value:""
      }
    }
  }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  
}

  componentDidMount(){
    this.loadProjects();

  }

    loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({projectBoard:res.data, projectname:""})
        )
        .catch(err => console.log(err));
  };

  changeHandler = event => {
    console.log = ("change handler triggered")
    const name = event.target.name
    const value = event.target.value
    this.setState({
      formControls: {
        [name]:value
        }
      })
    }
  

  handleComplete = (id) => {
    console.log("you clicked complete")
    this.setState( prevState => {
      const updatedProjectBoard = prevState.projectBoard.map(project => {
        if(project._id === id){
          console.log ("this is project id: " + project._id)
          project.complete = !project.complete
        }
        return project
      })
      return {
        projectBoard: updatedProjectBoard
       
      }
    })  
  }
    


  handleFormSubmit = event => {
    event.preventDefault();
    console.log("you clicked submit")
    if (event.target.newTask && event.target.newBudget) {
      API.saveProject({
        task: event.target.newTask,
        budget: event.target.newBudget,
        username: "guest",
        projectname:"buttonadd",

      })
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
<div>  
     <div>
      
        <div>
          <table className="table table-hover text-center projectTable mx-auto border">
          <thead>
           
                  <tr><Project 
                  handleChange={this.changeHandler}
                  handleFormSubmit={this.handleFormSubmit}
                  projectname ={"My First Project"}
                  newTask = {this.state.formControls.newTask.value} 
                  newBudget = {this.state.formControls.newBudget.value} 
                  />
                 
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
                  handleComplete={this.handleComplete}  
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