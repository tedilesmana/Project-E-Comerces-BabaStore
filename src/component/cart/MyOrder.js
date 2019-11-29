import React from 'react';

const MyOrder = (props) => {
  return (
      <div>
        <button className="btn btn-dark" onClick={props.Plus}>+</button>
        <input type="text" value={props.value} readOnly />
        <button className="btn btn-dark" onClick={props.Minus}>-</button>
      </div>
  )
}

export default MyOrder;

// state = {
//   order:0
// }

// HandleCounter = (value) => {
// 	this.props.onCounterChange(value);
// }

// Minus = () => {
//   if (this.state.order>0) {
//     this.setState({
//       order: this.state.order - 1
//     }, () => {
//     	this.HandleCounter(this.state.order);
//     })
//   }
// }

// Plus = () =>{
//     this.setState({
//       order: this.state.order + 1
//     }, () => {
//     	this.HandleCounter(this.state.order);
//     })
//   }