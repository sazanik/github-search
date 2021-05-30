import React from "react";
import './App.scss'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Empty from "./pages/Empty";
import {AlertProvider} from "./context/alert/state";


const App = () => {

  return (
      <AlertProvider>
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
      </AlertProvider>
  )
}

export default App
