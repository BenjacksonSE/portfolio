import React from 'react'
import classes from './Nav.module.scss'

const Nav = ({showNav, setShowNav, darkMode, setDarkMode}) => {
  return (
    <div className={!showNav ? `${classes.nav} ${classes.hideNav}` : `${classes.nav}`}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__list__item} onClick={() => setShowNav(!showNav)} role="button"><a href='#hero'>Home</a></li>
        <li className={classes.nav__list__item} onClick={() => setShowNav(!showNav)} role="button"><a href='#about'>About</a></li>
        <li className={classes.nav__list__item} onClick={() => setShowNav(!showNav)} role="button"><a href='#skills'>Skills</a></li>
        <li className={classes.nav__list__item} onClick={() => setShowNav(!showNav)} role="button"><a href='#projects'>Projects</a></li>
        <li className={classes.nav__list__item} onClick={() => setShowNav(!showNav)} role="button"><a href='#contact'>Contact</a></li>
        <li className={classes.nav__list__item} onClick={() => setShowNav(!showNav)} role="button"><a href='https://benblogapp.herokuapp.com/'>Blog</a></li>
      </ul>
      {/* <div className={classes.themeSwitch} onClick={() => setDarkMode(!darkMode)} role='button'>
        <FaRegMoon />
      </div> */}
    </div>
    
  )
}

export default Nav