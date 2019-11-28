import React, { Component } from 'react';
import CardProduct from '../component/CardProduct';
import BtnCard from '../component/BtnCard';

class VHome extends Component {

super(props);

	this.state = {
		// name:''
	}

	// this.onSubmit = this.onSubmit.bind(this);
	// this.handleChange = this.handleChange.bind(this);
}

  render() {
    return (
      <div className="col-md-12 pl-5 pr-5 pt-3">
	          <div className="row">
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
    			</div>
	          </div>
	        </div>
    );
  }
}

export default VHome;
