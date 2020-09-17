import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import DestinationInfo from './Components/DestinationInfo/DestinationInfo';
import Login from './Components/Login/Login';
import Accommodation from './Components/Accommodation/Accommodation';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destinationInfo/:id">
            <DestinationInfo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/accommodation">
            <Accommodation />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
