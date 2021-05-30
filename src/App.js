import React from "react";
import './App.scss'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Empty from "./pages/Empty";
import {AlertState} from "./context/alert/state";
import {GithubState} from "./context/github/state";


const App = () => {

  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className='App'>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/notfound' component={NotFound}/>
              <Route path='/empty' component={Empty}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App
