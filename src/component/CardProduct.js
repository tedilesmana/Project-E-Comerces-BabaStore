import React from 'react';
import '../style/CardProduct.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdbreact';

const CardProduct = () => {
  return (
      <MDBCard>
        <MDBCardImage id="img-card" className="img-fluid" src={require('../assets/img/product-1.png')} waves />
        <MDBCardBody>
          	<MDBCardText className="">
            <b>I-PHONE</b>
            <br/>
            Harga: Rp.2.000.000-
          	</MDBCardText>
        </MDBCardBody>
      </MDBCard>
  )
}

export default CardProduct;