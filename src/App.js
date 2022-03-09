import classes from './App.module.scss'
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import {useState} from 'react';

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="App">
      <Nav showNav={showNav} setShowNav={setShowNav}/>
      <div className={classes.container}>
        <Main showNav={showNav} setShowNav={setShowNav}/>
      </div>
      
      
    </div>
  );
}

export default App;
