import React, { Component } from 'react';
import { useParams } from "react-router-dom";
// import axios from 'axios';
import FormEditProduk from '../component/edit_produk/FormEditProduk'


function BlogPost() {
  let { id } = useParams();
  return <div><FormEditProduk idValue={id} /></div>;
}

class VEditProduk extends Component {
	// state = {
	// 	produk:{
	// 		id : 1,
	// 		nama_produk : '',
	// 		harga_produk : '',
	// 		image_produk : ''
	// 	}
	// }

	// handleTambahProduk = (e) => {
	// 	let val = e.target.value;
	// 	let name_val = e.target.name;
	// 	let dataProduk = this.state.produk;
	// 	let timeNow = new Date().getTime();

	// 	dataProduk[name_val] = val;
	// 	dataProduk['id'] = timeNow;
	// 	this.setState({
	// 		produk : dataProduk
	// 	}, () => {
	// 		console.log(dataProduk);
	// 	})
	// }

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	this.postDataToApi();
	// 	console.log(this.state.produk);
	// }

	// postDataToApi = () => {
	// 	axios.post('http://localhost:3004/posts', this.state.produk).then((res) => {
	// 		console.log(res);
	// 	}, (err) => {
	// 		console.log(err);
	// 	})
	// }





  render() {
    return (
	    <div>
	      <div className="card col-md-4 offset-md-4 mt-5 pt-5 pb-5">
	      	<div><BlogPost /></div>
	      </div>
	     </div>
    );
  }
}

export default VEditProduk;

