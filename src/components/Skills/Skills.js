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
          <img src={skill1}/>
          <h2>React</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac congue orci. Morbi non condimentum lorem.</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill2}/>
          <h2>Ruby on Rails</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac congue orci. Morbi non condimentum lorem.</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill3}/>
          <h2>CSS and SCSS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac congue orci. Morbi non condimentum lorem.</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill4}/>
          <h2>Javascript (ES6+)</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac congue orci. Morbi non condimentum lorem.</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill5}/>
          <h2>Node.js</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac congue orci. Morbi non condimentum lorem.</p>
        </div>
        <div className={classes.content__box}>
          <img src={skill6}/>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac congue orci. Morbi non condimentum lorem.</p>
        </div>
      </div>
    </section>
  )
}

export default Skills