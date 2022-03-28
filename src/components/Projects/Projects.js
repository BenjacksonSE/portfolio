import React from 'react'
import classes from "./Projects.module.scss";
import project1 from "./../../images/img1.jpg"
import project2 from "./../../images/img2.jpg"
import project3 from "./../../images/img3.jpg"
// import project4 from "./../../images/img4.jpg"
// import project5 from "./../../images/img5.jpg"
// import project6 from "./../../images/img6.jpg"


const Projects = () => {
  return (
    <section className={`${classes.projects} ${classes.adjust}`} id='projects'>
      <div className={classes.title}>
        <h2>Recent Works</h2>
        <p>These are some of the other projects I have been working on.</p>
      </div>
      <div className={classes.content}>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project1} alt='img'/>
          </div>
         <div class={classes.textBox}>
            <h3>Travel App</h3>
            <p className={classes.textBox__textContent}>Fullstack itinerary planning app allowing users to create, edit, and share itineraries and plan getaways.   Built using React, Leaflet and Ruby on Rails. </p>
            <a href='https://github.com/BenjacksonSE/travel-app' target="_blank" rel="noreferrer">Demo</a>
            <p> | </p>
            <a href='https://github.com/BenjacksonSE/travel-app' target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project2} alt='img'/>
          </div>
          <div class={classes.textBox}>
            <h3>Stock Dashboard</h3>
            <p className={classes.textBox__textContent}>A tool to track and analize stocks aswell as manage a stock portfolio. Built using React and ChartJS.  Deployed on Netlify.</p>
            <a href='https://financial-dashboard-project.netlify.app/' target="_blank" rel="noreferrer">Demo</a>
            <p> | </p>
            <a href='https://github.com/dahyman91/financial-dashboard' target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <div className={classes.content__workBox}>
          <div className={classes.imgBox}>
            <img src={project3} alt='img'/>
          </div>
          <div class={classes.textBox}>
            <h3>Notes App</h3>
            <p className={classes.textBox__textContent}>Fullstack note taking app.  Users can create, edit, and delete notes and notebooks. Built using React and Ruby. Deployed on Netlify.</p>
            <a href='https://distracted-lichterman-ceb7b8.netlify.app/' target="_blank" rel="noreferrer">Demo</a>
            <p> | </p>
            <a href='https://github.com/jmezalon/NotesApp' target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        {/* <div className={classes.content__workBox}>
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
        </div> */}
      </div>
    </section>
  )
}

export default Projects