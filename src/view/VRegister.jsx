import React, { Component } from 'react';
import FormRegis from '../component/register/FormRegis';

class VRegister extends Component {

  render() {
    return (
      <div className="col-md-4 offset-md-4 mt-5 card pt-5 pb-5">
      	<FormRegis />
      </div>
    );
  }
}

export default VRegister;