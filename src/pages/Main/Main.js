import React from 'react'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Featured1 from '../../components/Featured/Featured1'
import Featured2 from '../../components/Featured/Featured2'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Topbar from '../../components/Topbar/Topbar'
import classes from './Main.module.scss'

const Main = ({ showNav, setShowNav }) => {
  return (
    <div className={!showNav ? `${classes.main} ${classes.hideNav}` : `${classes.main}`}>
      <Topbar showNav={showNav} setShowNav={setShowNav}/>
      <Hero />
      <About />
      <Skills />
      <Featured1 />
      <Featured2 />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main