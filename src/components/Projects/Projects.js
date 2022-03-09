import React from 'react'
import classes from "./Projects.module.scss";
import project1 from "./../../images/img1.jpg"
import project2 from "./../../images/img2.jpg"
import project3 from "./../../images/img3.jpg"
import project4 from "./../../images/img4.jpg"
import project5 from "./../../images/img5.jpg"
import project6 from "./../../images/img6.jpg"


const Projects = () => {
  return (
    <section className={`${classes.projects} ${classes.adjust}`} id='projects'>
      <div className={classes.title}>
        <h2>Recent Works</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac congue orci. Morbi non condimentum lorem. </p>
      </div>
      <div className={classes.content}>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project1}/>
          </div>
          <div class={classes.textBox}>
            <h3>Project01</h3>
          </div>
        </div>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project2}/>
          </div>
          <div class={classes.textBox}>
            <h3>Project02</h3>
          </div>
        </div>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project3}/>
          </div>
          <div class={classes.textBox}>
            <h3>Project03</h3>
          </div>
        </div>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project4}/>
          </div>
          <div class={classes.textBox}>
            <h3>Project04</h3>
          </div>
        </div>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project5}/>
          </div>
          <div class={classes.textBox}>
            <h3>Project05</h3>
          </div>
        </div>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project6}/>
          </div>
          <div class={classes.textBox}>
            <h3>Project06</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects