import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className='nav-bar' style={styleNav}>
          <div>
              <Link to='/'><span style={{color:'white'}}>FupProjects</span></Link>
          </div>
          {this.props.loggedInUser ? 
          (<>
            <Link Link to='/projects'><Button color= 'red' name = 'Projects' /></Link>
            <Link Link to='/students'><Button color= 'red' name = 'Students' /></Link>
          </>)
          : 
          (<div style={styleDiv}>
          <Link Link to='/signup'><Button color= 'red' name = 'Signup' /></Link>
          <Link to='/login'><Button  color='blue' name = 'Login'/></Link>
          </div>)}
        </nav>
      </div>
    )
  }
}

const styleNav = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'blue'
}

const styleDiv = {
  display: 'flex',
  justifyContent: 'space-between',
}

export default NavBar
