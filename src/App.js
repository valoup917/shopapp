import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import home from './components/pages/home'
import SignUp from './components/pages/SignUp'
import contact from './components/pages/Contact'
import faq from './components/pages/FAQ'
import rules from './components/pages/Rules'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'exact component={home}/>
          <Route path='/home'exact component={home}/>
          <Route path="/faq" component={faq}/>
          <Route path="/contact" component={contact}/>
          <Route path="/rules" component={rules}/>
          <Route path="/sign-up" component={SignUp}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;