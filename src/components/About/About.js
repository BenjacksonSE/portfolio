import React from 'react'
import classes from './About.module.scss';
import image1 from './../../images/bg1.jpg';

const About = () => {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.title}>
        <h2>About Me</h2>
      </div>
      <div className={classes.content}>
        <div className={classes.content__text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non convallis felis, tincidunt fringilla magna. Donec eu leo dolor. Aliquam a pulvinar felis. Vestibulum eget auctor enim. Vivamus eget facilisis risus, at convallis erat. Praesent purus libero, pretium nec enim eget, fringilla blandit libero. Mauris quis turpis vel lacus suscipit blandit. Pellentesque tincidunt pulvinar diam id scelerisque. Etiam ac semper nibh. Aenean mattis sapien sed est egestas hendrerit. Donec at tortor accumsan nisi ultrices ultrices. Fusce dignissim tortor sed erat consequat condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at molestie arcu. Vestibulum leo felis, vulputate sed enim eget, rutrum vestibulum ante. Donec varius orci tempus ligula semper, vitae pretium nulla maximus.
          </p>
        </div>
        <div className={classes.imgBox}>
          <img src={image1} />
        </div>
      </div>
    </section>
  )
}

export default About