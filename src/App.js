import { Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import RGB from './components/rgb/rgb';
import NotFound from './components/notFound/notFound';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="switchBox">
        <Switch>
          <Route exact path="/rgb/:r/:g/:b" component={RGB}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
