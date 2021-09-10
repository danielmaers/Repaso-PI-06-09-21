import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Characters from './components/Characters';
import Nav from './components/Nav';
import Form from './components/Form';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/create" component={Form} />
      <Route exact path="/" component={LandingPage} />
      <Route  path="/main" component={Characters} />
      <Route  exact path="/detail/:id" render={({ match }) => <Detail id={match.params.id} />} />
    </div>
  );
}

export default App;
