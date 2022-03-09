import React from 'react'
import classes from './Topbar.module.scss'
import { FaBars } from 'react-icons/fa'

const Topbar = () => {
  return (
    <div className={classes.topbar}>
      <a href='#' className={classes.logo}>Ben Jackson</a>
      <div className={classes.toggle}>
        <FaBars />
      </div>
    </div>
  )
}

export default Topbar