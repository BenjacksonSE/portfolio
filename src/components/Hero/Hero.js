import React from 'react'
import classes from './Hero.module.scss'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { saveAs } from "file-saver";


const Hero = () => {

  const saveFile = () => {
    saveAs(
      'Resume.pdf',
      "ben-jackson-resume.pdf"
    );
  };
  return (
    <section className={classes.hero} id='hero'>
      <div className={classes.wrapper}>
        <div className={classes.desc}>I'm a full stack software engineer based in Brooklyn, New York</div>
      </div>
      <ul className={classes.socialMedia}>
        <li><a href='https://twitter.com/Benjacksonse' target="_blank" rel="noreferrer"><FaTwitter/></a></li>
        <li><a href='https://github.com/BenjacksonSE' target="_blank" rel="noreferrer"><FaGithub/></a></li>
        <li><a href='https://www.linkedin.com/in/benjamin-jackson-864148225/' target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
        <li><div>
          <button onClick={saveFile}>Resume</button>
        </div></li>
      </ul>
    </section>
  )
}

export default Hero