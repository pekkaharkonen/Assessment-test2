import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

import './App.css';
import { Home } from './components/Home';
import NotFound from './components/NotFound';
import ScooterList from './components/ScooterList';
import ScooterForm from './components/ScooterForm';
import ScooterDetail from './components/ScooterDetail';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='Content'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/list' exact component={ScooterList} />
          <Route path='/form' exact component={ScooterForm} />
          <Route path='/detail/:id' component={ScooterDetail} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
