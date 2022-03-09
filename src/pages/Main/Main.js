import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import classes from './Main.module.scss'

const Main = () => {
  return (
    <div className={classes.main}>
      <Topbar />
    </div>
  )
}

export default Main