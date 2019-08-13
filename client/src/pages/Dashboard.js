import React, {Component} from 'react';
import Project from '../components/Project';
// import { Link } from "react-router-dom";
import API from '../utils/API';
// import ProjectTask from '../components/ProjectTask';


// function Dashboard () {
//   return (
//     <Project />
//   );
// }

// const projects = [
//   {_id:1, projectname:"test", task:"do this", budget:500, actualSpend:0, complete:false},
//   {_id:2, projectname:"test1", task:"do that", budget:500, actualSpend:0, complete:false},
//   {_id:3, projectname:"test2", task:"do all of it", budget:500, actualSpend:0, complete:false},
//   {_id:4, projectname:"test3", task:"do more", budget:500, actualSpend:0, complete:false},
// ];

class Dashboard extends Component {
  state = {
    // q:'',
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
    return (
<div>
   
     <div>
      {this.state.projectBoard.map(projects => (

        <Project 
        projectname ={projects.projectname}
        task = {projects.task}
        budget = {projects.budget}
        id = {projects._id}
        actualspend = {projects.actualspend}    

        />
     

        ))}
    </div>
    
    

    </div>
// end retun & render
  )}
  // end component
};


export default Dashboard;