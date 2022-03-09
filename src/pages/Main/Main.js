import React from 'react'
import Nav from '../../components/Nav/Nav'
import Topbar from '../../components/Topbar/Topbar'
import classes from './Main.module.scss'

const Main = () => {
  return (
    <div className={classes.container}>
      <Nav />
      <Topbar />
    </div>
  )
}

export default Main