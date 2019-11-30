import React, { Component } from 'react';
import Headnav from './component/template/navigasi/Headnav';
import Navbar from './component/template/navigasi/Navbar';
import VCart from './view/VCart';
import VLogin from './view/VLogin';
import VHome from './view/VHome';
import VRegister from './view/VRegister';
import Alamat from './Alamat';
import VFavorite from './view/VFavorite';
import VNotifikasi from './view/VNotifikasi';
import VUploadProduk from './view/VUploadProduk';
import VMyProduk from './view/VMyProduk';
import VEditProduk from './view/VEditProduk';
import { Switch, Route } from "react-router-dom";

class App extends Component {

// state = {
//   val:5
// }

// handleValue = (newidValue) => {
//   this.setState({
//     val:newidValue
//   })
// }

  render() {
    return (
      <div>
        <Headnav />
        <Navbar />
        {/*<div>{this.state.val}</div>*/}
        {/*<VEditProduk val={this.state.val} />*/}
        <Switch>
          <Route path="/" exact ><VHome /></Route>
          <Route path="/favorite"><VFavorite /></Route>
          <Route path="/Alamat"><Alamat /></Route>
          <Route path="/login"><VLogin/></Route>
          <Route path="/mycart"><VCart /></Route>
          <Route path="/register" ><VRegister /></Route>
          <Route path="/notifikasi" ><VNotifikasi /></Route>
          <Route path="/upload_produk" ><VUploadProduk /></Route>
          <Route path="/myproduk" ><VMyProduk /></Route>
          {/*passValue={(idValue) => this.handleValue(idValue)}*/}
          <Route path="/edit_produk/:id" ><VEditProduk /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
