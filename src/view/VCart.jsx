import React from 'react';
import CardProduct from '../component/CardProduct';
import { MDBCollapse } from "mdbreact";

export default class VCart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			collapseID: ""
		}
	}

	toggleCollapse = collapseID => () => {
	  this.setState(prevState => ({
	    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
	  }));
	}

	render() {
		return (
			<div className="col-md-12">
				<div className="border m-3 p-3">
					<div className="bg-success text-white font-weight-bold card-header rounded ml-2 mr-2">
						<b>I-PHONE</b>
						<span className="float-right">
							<span
							  className="btn-sm btn-outline-white pl-3 pr-3"
						      color="primary"
						      onClick={this.toggleCollapse("basicCollapse")}
						    >
						      Detail
						    </span>
						</span>
						<span className="float-right mr-3">
							<span
							  className="btn-sm btn-outline-white pl-3 pr-3"
						      color="primary"
						      onClick={this.toggleCollapse("basicCollapse1")}
						    >
						      My Order
						    </span>
						</span>
					</div>
					<div className="row p-2">
		  				<div className="col-3" id="card">
				            <CardProduct />
		    			</div>
			            <MDBCollapse className="col-md-9" id="basicCollapse" isOpen={this.state.collapseID}>
				          <p>
				            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
				            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				            aliquip ex ea commodo consequat. Duis aute irure dolor in
				            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
				            culpa qui officia deserunt mollit anim id est laborum
				          </p>
				        </MDBCollapse>
				        <MDBCollapse className="col-md-9" id="basicCollapse1" isOpen={this.state.collapseID}>
				          <p>
				            Test Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque a, cumque blanditiis. Consequatur aspernatur praesentium perferendis, libero alias quibusdam tenetur odit quasi, dolore quaerat corporis maiores, neque velit, culpa quam!
				          </p>
				        </MDBCollapse>
			        </div>
				</div>
			</div>
		);
	}
}
