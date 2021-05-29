import './App.scss'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Empty from "./pages/Empty";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='App'>

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/notfound' exact component={NotFound}/>
          <Route path='/empty' exact component={Empty}/>
          <Route path='/empty' component={Empty}/>
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App
