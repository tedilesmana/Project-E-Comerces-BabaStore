import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

class FormEditProduk extends Component {

constructor() {
        super();
        this.state = {
          produk:{
                  nama_produk:'',
                  harga_produk:'',
                  image_produk:''
                  }
        }
    }

componentDidMount(){
  axios.get('http://localhost:3004/posts/1575063907508')
  .then((result) => {
    // console.log(result);
      this.setState({
          produk:result.data
      })
  })

  // return <Redirect to='/edit_produk' />
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(json => console.log(json))
}

handleChang(e) {
  let val = e.target.value;
  let name_val = e.target.name;
  let val_produk = this.state.produk;

  val_produk[name_val]= val ;
  
  this.setState({
      produk:val_produk
  }, () => {
  })
}

render(){
    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={this.handleSubmit}>
            <p className="h4 text-center mb-4">Edit Data Produk</p>
            
            <hr/>

            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Nama Produk
            </label>
            <input
              type="text"
              id="nama_produk"
              name="nama_produk"
              className="form-control"
              value={this.state.produk.nama_produk}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Harga Produk
            </label>
            <input
              type="text"
              id="harga_produk"
              name="harga_produk"
              className="form-control"
              value={this.state.produk.harga_produk}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Url Produk
            </label>
            <input
              type="text"
              id="image_produk"
              name="image_produk"
              className="form-control"
              value={this.state.produk.image_produk}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Tambah Produk
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  };
}

export default FormEditProduk;