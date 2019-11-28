import React, { Component } from 'react';
import Headnav from './component/template/navigasi/Headnav';
import Navbar from './component/template/navigasi/Navbar';
// import VCart from './view/VCart';
// import VLogin from './view/VLogin';
import VHome from './view/VHome';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Headnav />
        <Navbar />
        <Switch>
          <Route path="/" exact ><VHome /></Route>
          {/*<Route path="/mycart"><VCart /></Route>
          <Route path="/login"><VLogin/></Route>*/}
        </Switch>
      </div>
    );
  }
}

export default App;
