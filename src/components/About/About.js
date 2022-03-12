import React from 'react'
import classes from './About.module.scss';
// import image1 from './../../images/bg1.jpg';

const About = () => {
  return (
    <section className={`${classes.about} ${classes.adjust}`} id='about'>
      <div className={classes.title}>
        <h2>Me, Myself, and I</h2>
      </div>
      <div className={classes.content}>
        <div className={classes.content__text}>
          <p>
            <br></br><br></br>Hi, my name is Ben Jackson, I am a Full Stack developer with a background in education.  My experience has given me a strong foundation in teamwork, management, and people focused solutions.  Recently, I graduated from Flatiron School’s immersive software development bootcamp.  I have been coding for over 5 years, however, only recently began pursuing it as a full time career, and I couldn’t have made a better choice.<br></br><br></br>I am well-organized, independent, and a problem solver.  I am an avid runner, fanatical skier, novice cook, and have just started a new hobby of reading and tea drinking.<br></br><br></br>I am interested in Front End and Full Stack development and working on ambitious projects with equally as ambitious people.
          </p>
        </div>
        {/* <div className={classes.content__imgBox}>
          <img src='image1' alt='No pic here yet'/>
        </div> */}
      </div>
    </section>
  )
}

export default About