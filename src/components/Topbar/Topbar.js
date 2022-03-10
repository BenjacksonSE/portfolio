import React from 'react'
import classes from './Topbar.module.scss'
import { FaBars } from 'react-icons/fa'


const Topbar = ({showNav, setShowNav}) => {
  return (
    <div className={!showNav ? `${classes.topbar} ${classes.hideNav}` : `${classes.topbar}`}>
      <a href='#hero' className={classes.logo}>Ben Jackson</a>
      <div className={!showNav ? `${classes.toggle} ${classes.hideNav}` : `${classes.toggle}`} onClick={() => setShowNav(!showNav)} role="button">
        <FaBars/>
      </div>
    </div>
  )
}

export default Topbar