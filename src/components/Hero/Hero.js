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
        <li><a href='https://twitter.com/Benjacksonse' target="_blank"><FaTwitter/></a></li>
        <li><a href='https://github.com/BenjacksonSE' target="_blank"><FaGithub/></a></li>
        <li><a href='https://www.linkedin.com/in/benjamin-jackson-864148225/' target="_blank"><FaLinkedin/></a></li>
        <li><a href='https://www.instagram.com/benjackson54/' target="_blank"><FaInstagram/></a></li>
      </ul>
    </section>
  )
}

export default Hero