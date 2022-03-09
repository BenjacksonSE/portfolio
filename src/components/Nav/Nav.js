import React from 'react'
import classes from './Nav.module.scss'

const Nav = ({showNav, setShowNav}) => {
  return (
    <div className={!showNav ? `${classes.nav} ${classes.hideNav}` : `${classes.nav}`}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__list__item}><a href='#hero'>Home</a></li>
        <li className={classes.nav__list__item}><a href='#about'>About</a></li>
        <li className={classes.nav__list__item}><a href='#skills'>Services</a></li>
        <li className={classes.nav__list__item}><a href='#projects'>Projects</a></li>
        <li className={classes.nav__list__item}><a href='#'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav