import React, { Component } from 'react';
import CardProduct from '../component/home/CardProduct';
import BtnCard from '../component/home/BtnCard';
import BtnPill from '../component/reusable/BtnPill';

class VHome extends Component {


constructor(props) {
        super(props);
        this.state = {
        }
    }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
}
// super(props)

	// this.state = {
		// name:''
	// }

	// this.onSubmit = this.onSubmit.bind(this);
	// this.handleChange = this.handleChange.bind(this);
// }

  render() {
    return (
      <div className="col-md-12 pl-5 pr-5 pt-3">
        <div className="row">
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
        </div>
      </div>
    );
  }
}

export default VHome;
