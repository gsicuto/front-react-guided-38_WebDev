import React, { Component } from 'react'
import api from '../utils/api.util'

class Projects extends Component {
  
  state = {
    projects: []
  }

  componentDidMount = async () => {
    const projects = await api.getAllProjects();
    this.setState({
      projects: projects
    })
  }

  render() {
    return (
      <div>
        {this.state.projects.map(project => {
          return <h2>{project.title}</h2>
        })}
      </div>
    )
  }
}

export default Projects
