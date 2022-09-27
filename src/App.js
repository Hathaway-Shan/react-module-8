import { Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import RGB from './components/rgb/rgb';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="switchBox">
        <Switch>
          <Route path="/rgb/:r/:g/:b" component={RGB}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
