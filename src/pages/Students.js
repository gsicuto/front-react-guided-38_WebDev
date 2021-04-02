import React, { Component } from 'react'
import Button from '../components/Button';
import api from '../utils/api.util'

class Students extends Component {
  state = {
    students: [],
    name:''
  }

  loadStudents = async () => {
    const students = await api.getAllStudents();
    this.setState({
      students: students
    })
  }

  componentDidMount = () => {
    this.loadStudents();
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const newStudent = await api.createStudent({name: this.state.name});
    this.setState({
      name:''
    })
    this.loadStudents();
  }

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input name="name" type="text" value={this.state.name} onChange={this.handleInput}/>
          <button type="submit" onClick={this.handleSubmit}>+</button>
        </form>
        <ul>
          {this.state.students.map(student => {
            return <li>{student.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Students
