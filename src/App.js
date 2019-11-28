import React, { Component } from 'react';
// import Headnav from './component/template/navigasi/Headnav';
// import Navbar from './component/template/navigasi/Navbar';
// import VCart from './view/VCart';
// import VLogin from './view/VLogin';
// import VHome from './view/VHome.js';
import Home from './Home';
import Alamat from './Alamat';
import Nama from './Nama';
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="Nama">Nama</Link></li>
          <li><Link to="Alamat">Alamat</Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route path="/" exact ><Home /></Route>
          <Route path="/Nama"><Nama /></Route>
          <Route path="/Alamat"><Alamat /></Route>
        </Switch>
        {/*<Headnav />*/}
        {/*<Navbar />*/}
        {/*<Switch>*/}
          {/*<Route path="/" exact ><VHome /></Route>*/}
          {/*<Route path="/mycart"><VCart /></Route>*/}
          {/*<Route path="/login"><VLogin/></Route>*/}
        {/*// </Switch>*/}
      </div>
    );
  }
}

export default App;
