import React from 'react'
import classes from './Featured.module.scss';
import blog from '../../images/blog.png';

const Featured2 = () => {
  return (
    <div className={`${classes.featured} ${classes.adjust}`}>
      <div className={classes.content}>
        <div className={classes.content__text}>
          <p>
            <br></br>I’ve enjoyed posting technical blogs during my learning and I wanted to create a site for myself to do so.  <br></br><br></br>This project is built with a React front end and Node.js back end.  On the front end, I used useContext and useRef for state management, on the back end, I used express to handle my server, mutter to handle image storage, crypt to handle password hashing, and mongo DB as my json storage. <br></br><br></br>Technologies used: React, Javascript, HTML, CSS, Node.js 
          </p>
          <div className={classes.linkContainer}>
            <a href='https://coruscating-manatee-8ac8c9.netlify.app/' target="_blank" rel="noreferrer" className={classes.demoLink}>Demo</a>
            <a href='https://github.com/BenjacksonSE/sorting-visualizer' target="_blank" rel="noreferrer" className={classes.demoLink}>Github</a>
          </div>
        </div>
        <div className={classes.content__imgBoxL}>
          <img className={classes.content__projectImg} src={blog} alt='No pic here yet'/>
        </div>
      </div>
    </div>
  )
}

export default Featured2