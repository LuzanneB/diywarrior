import React, { Component } from 'react';
import Project from '../components/Project'
import API from '../utils/API';

class Dashboard extends Component {
  state = {
    projectname:"",
  };

  componentDidMount(){
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
    .then(res =>
      this.setState({projectname:res.data}),
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Project 
        projectname= {this.state.projectname} />
     );
  }
}


export default Dashboard;