import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import classes from './Main.module.scss'

const Main = ({ showNav, setShowNav }) => {
  return (
    <div className={!showNav ? `${classes.main} ${classes.hideNav}` : `${classes.main}`}>
      <Topbar showNav={showNav} setShowNav={setShowNav}/>
    </div>
  )
}

export default Main