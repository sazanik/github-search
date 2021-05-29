import './App.scss'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Main from "./components/pages/Main";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='App'>

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/main' component={Main}/>
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App
