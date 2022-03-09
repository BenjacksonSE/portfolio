import React from 'react'
import classes from './Topbar.module.scss'

const Topbar = () => {
  return (
    <div className={classes.topbar}>
      <a href='#' className={classes.logo}>Ben Jackson</a>
      <div className={classes.toggle}></div>
    </div>
  )
}

export default Topbar