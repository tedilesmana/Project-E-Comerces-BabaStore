import React from 'react';

const Thumbnail = (props) => {
  return (
      <div className="card">
        <img className= {props.cName} src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
      </div>
  )
}

export default Thumbnail;