import React from 'react'
import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={`${classes.contact} ${classes.adjust}`} id='contact'>
      <div className={classes.title}>
        <h2>Get in Contact</h2>
        <p>If you are interested in working with me, find my contact info below or fill out the form.</p>
      </div>
      <div className={classes.contactForm}>
        <div className={classes.contactForm__row}>
          <input type='text' name='' placeholder='First Name'/>
          <input type='text' name='' placeholder='Last Name'/>
        </div>
        <div className={classes.contactForm__row}>
          <input type='text' name='' placeholder='Email Adress'/>
          <input type='text' name='' placeholder='Mobile Number'/>
        </div>
        <div className={classes.contactForm__row2}>
          <textarea placeholder='Message'></textarea>
        </div>
        <div className={classes.contactForm__row2}>
          <input type='submit' value='Send'/>
        </div>
      </div>

    </section>
  )
}

export default Contact