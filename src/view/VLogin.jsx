import React, { Component } from 'react';
import FormLogin from '../component/login/FormLogin.js'

class VLogin extends Component {


constructor(props) {
        super(props);
        this.state = {
        }
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
          <div className="card col-md-4 offset-md-4 p-4 mt-5">
            <FormLogin />
          </div>
        </div>
      </div>
    );
  }
}

export default VLogin;
