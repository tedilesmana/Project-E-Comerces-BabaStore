import React from 'react';
import Icon from '@material-ui/core/Icon';
import '../../style/BtnPill.css';

const BtnPill = (props) => {
  return (
      <div id="btn-pill">
        <span className="bg-icon">
          <Icon className="fas fa-dollar-sign"></Icon>
        </span>
        <span className="label">BELI</span>
      </div>
  )
}

export default BtnPill;