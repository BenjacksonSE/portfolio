import React from 'react'
import classes from './Featured.module.scss';
import algo from '../../images/algo.png';

const Featured1 = () => {
  return (
    <section className={`${classes.featured} ${classes.adjust}`} id='featured'>
      <div className={classes.title}>
        <h2>Featured Projects</h2>
      </div>
      <div className={classes.content}>
        <div className={classes.content__imgBoxR}>
          <img className={classes.content__projectImg} src={algo} alt='No pic here yet'/>
        </div>
        <div className={classes.content__text}>
          <p>
            <br></br>After learning all the sorting algorithms in preparation for interviews, I decided to dig a little deeper and create an application that showed how each works in real time.<br></br><br></br>This project is built totally in React and Javascript using both class based and functional based components.  This challenged my use of async functions and class based components which afterwards I feel much more confident with.<br></br><br></br>Technologies used: React, Javascript, HTML, CSS
          </p>
          <div className={classes.linkContainer}>
            <a href='https://coruscating-manatee-8ac8c9.netlify.app/' target="_blank" rel="noreferrer" className={classes.demoLink}>Demo</a>
            <a href='https://github.com/BenjacksonSE/sorting-visualizer' target="_blank" rel="noreferrer" className={classes.demoLink}>Github</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Featured1