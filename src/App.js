import logo from './logo.svg';
import {Switch ,Route,Link} from"react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Description from './Components/Description';
import Home from './Components/Home';
import Nav from './Components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/description" component={Description}></Route>
      <Route path="/contact" component={Contact}></Route>
      </Switch>



    </div>
  );
}

export default App;
