import React from 'react'
import classes from './Featured.module.scss';
import blog from '../../images/blog.png';

const Featured2 = () => {
  return (
    <div className={`${classes.featured} ${classes.adjust}`}>
      <div className={classes.content}>
        <div className={classes.content__text}>
          <p>
            <br></br><br></br>Hi, my name is Ben Jackson, I am a Full Stack developer with a background in education.  My experience has given me a strong foundation in teamwork, management, and people focused solutions.  Recently, I graduated from Flatiron School’s immersive software development bootcamp.  I have been coding for over 5 years, however, only recently began pursuing it as a full time career, and I couldn’t have made a better choice.<br></br><br></br>I am well-organized, independent, and a problem solver.  I am an avid runner, fanatical skier, novice cook, and have just started a new hobby of reading and tea drinking.<br></br><br></br>I am interested in Front End and Full Stack development and working on ambitious projects with equally as ambitious people.
          </p>
        </div>
        <div className={classes.content__imgBoxL}>
          <img src={blog} alt='No pic here yet'/>
        </div>
      </div>
    </div>
  )
}

export default Featured2