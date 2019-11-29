import React, { Component } from 'react';
import CardProduct from '../component/home/CardProduct';
import BtnCard from '../component/home/BtnCard';
import BtnPill from '../component/reusable/BtnPill';
import axios from 'axios';
import '../style/VMyProduk.css';

class VMyProduk extends Component {


constructor(props) {
        super(props);
        this.state = {
          post:[]
        }
    }
getPostApi = () => {
	axios.get('http://localhost:3004/posts')
	.then((result) => {
	  this.setState({
	      post:result.data
	  })
	})
}

componentDidMount(){
  	this.getPostApi()
}

handleHapus = (e, data) => {
	e.preventDefault();
	axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
		this.getPostApi()
	})
	console.log(data);
}

handleEdit = () => {
	console.log('edit');
}

  render() {
    return (
      <div className="col-md-12 pl-5 pr-5 pt-3">
        <div className="row">
  				
		            {
                  this.state.post.map(post => {
                  return  <div className="col-md-2 p-2" id="card" key={post.id} >
                            <CardProduct title={post.nama_produk} desc={post.harga_produk} img={post.image_produk} />
                            <BtnCard />
                            <div className="hapus" onClick={e => this.handleHapus(e, post.id)}>
                            	<BtnPill label="Hapus" icon="fas fa-trash"/>
                            </div>

                            <div className="update" onClick={this.handleEdit}>
                            	<BtnPill label="Edit" icon="fas fa-edit"/>
                            </div>
                          </div>
                  })
                }
		         
        </div>
      </div>
    );
  }
}

export default VMyProduk;
