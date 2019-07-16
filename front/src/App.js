import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Performances from './components/Performances';
import School from './School';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
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
