import React from 'react'
import classes from './Skills.module.scss';
import skill1 from './../../images/icon1.png';
import skill2 from './../../images/icon2.png';
import skill3 from './../../images/icon3.png';
import skill4 from './../../images/icon4.png';
import skill5 from './../../images/icon5.png';
import skill6 from './../../images/icon6.png';


const Skills = () => {
  return (
    <section className={`${classes.skills} ${classes.adjust}`} id='skills'>
      <div className={classes.title}>
        <h2>My Skills</h2>
        <p>Here are some of the technologies, languages, and skills I have been wroking on recently.</p>
      </div>
      <div className={classes.content}>
        <div className={classes.content__box}>
          <img src={skill1} alt='img'/>
          <h2>React</h2>
          <p>The first large Javascript framework I learned.  What I use for the majority of the frontends in personal projects</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill2} alt='img'/>
          <h2>Ruby on Rails</h2>
          <p>The language I use when createing SQL databases for my backends</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill3} alt='img'/>
          <h2>CSS and SCSS</h2>
          <p>A Passion of mine is making things tidy and organized thus CSS and I are a great match.</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill4} alt='img'/>
          <h2>Javascript (ES6+)</h2>
          <p>Even after my bootcamp, I continue to allot multiple hours in my week to practicing and leaning all JS has to offer.  My most proficient skill.</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill5} alt='img'/>
          <h2>mongoDB</h2>
          <p>The program I use when creating NoSQL and unstructured databases for my backends</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill6} alt='img'/>
          <h2>Web Design</h2>
          <p>A more recent endevor, I have become proficient with a design tool, figma, and love creating clean, intuitive UIUX designs.</p>
        </div>
      </div>
    </section>
  )
}

export default Skills