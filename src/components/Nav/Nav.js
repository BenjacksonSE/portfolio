import React from 'react'
import classes from './Nav.module.scss'

const Nav = () => {
  return (
    <div className={classes.nav}>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav