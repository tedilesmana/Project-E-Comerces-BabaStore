import React from 'react';
import '../../style/CardNotifikasi.css';
import CardProduct from '../home/CardProduct';

const CardNotifikasi = () => {
  return (
  	<div className="mt-4">
	  	<div className="col-md-12 card p-4">
	  	 <div className="row">
		      <div className="col-md-3" id="notifikasi">
		       	<CardProduct /> 
		      </div>
		      <div>
		      	Pesanan anda sedang dalam pengiriman, berikut adalah invoice pengiriman anda :
		      	<ul>
		      		<li>Nama Jasa Pengiriman : JNE</li>
		      		<li>Lokasi Pengiriman : Jakarta Timur</li>
		      	</ul>
		      </div>
	      </div>
	    </div>
    </div>
  )
}

export default CardNotifikasi;