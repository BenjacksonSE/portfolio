import React from 'react'
import classes from './Hero.module.scss'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Hero = () => {
  return (
    <section className={classes.hero} id='hero'>
      <div className={classes.wrapper}>
        <div className={classes.desc}>I'm a full stack software engineer based in Brooklyn, New York</div>
      </div>
      <ul className={classes.socialMedia}>
        <li><a href='#'><FaTwitter/></a></li>
        <li><a href='#'><FaGithub/></a></li>
        <li><a href='#'><FaLinkedin/></a></li>
        <li><a href='#'><FaInstagram/></a></li>
      </ul>
    </section>
  )
}

export default Hero