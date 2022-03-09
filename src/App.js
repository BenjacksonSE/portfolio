import classes from './App.module.scss'
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className={classes.container}>
        <Main />
      </div>
      
      
    </div>
  );
}

export default App;
