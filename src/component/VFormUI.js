import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class VFormUI extends Component {

constructor(props){
super(props);

	this.state = {
		name:''
	}

	this.onSubmit = this.onSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
  let val = event.target.value;
  this.setState({
    name : val
  });
}

onSubmit(event){
  event.preventDefault();
  this.setState({
    name : 'Tedi Aja Guys'
  });
}

	render() {
		return (
			<div className="mt-5">
				 <div className="card col-4 offset-4 p-4">
					<form onSubmit={this.onSubmit} >
						<Box component="span" display="block">
							<TextField 
								id="standart-with-placeholder"
								label="Nama Lengkap"
								placeholder="Masukan Nama"
								margin="normal"
								onChange={this.handleChange}
							/>
						</Box>
						<Box component="span" display="block" className="mt-4">
							<Button variant="contained" color="primary" type="submit">
								Ganti Nama
							</Button>
						</Box>
					</form>
					<div className="mt-4">
						<Nama name={this.state.name} />
					</div>
			    </div>
		    </div>
		);
	}
}

export default VFormUI;

const Nama = (props) => {
		return <div>
					Your Name Is : {props.name}
			   </div>
	}