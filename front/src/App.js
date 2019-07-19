import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Performances from './components/Performances';
import School from './components/School';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/performances" component={Performances} />
        <Route path="/school" component={School} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
