import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Topbar from '../../components/Topbar/Topbar'
import classes from './Main.module.scss'

const Main = ({ showNav, setShowNav }) => {
  return (
    <div className={!showNav ? `${classes.main} ${classes.hideNav}` : `${classes.main}`}>
      <Topbar showNav={showNav} setShowNav={setShowNav}/>
      <Hero />
      <About />
    </div>
  )
}

export default Main