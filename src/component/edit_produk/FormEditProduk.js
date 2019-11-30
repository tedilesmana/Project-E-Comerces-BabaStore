import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
const FormEditProduk = (props) => {

  const postDataToApi = () => {
   console.log(props.idValue)
  }

  postDataToApi();

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={props.submit}>
            <p className="h4 text-center mb-4">Edit Data Produk</p>
            
            <hr/>

            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Nama Produk
            </label>
            <input
              type="text"
              id="nama_produk"
              name="nama_produk"
              className="form-control"
              value={props.idValue}
              readOnly
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Harga Produk
            </label>
            <input
              type="text"
              id="harga_produk"
              name="harga_produk"
              className="form-control"
              value={props.idValue}
              readOnly
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Url Produk
            </label>
            <input
              type="text"
              id="image_produk"
              name="image_produk"
              className="form-control"
              value={props.idValue}
              readOnly
            />
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Tambah Produk
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormEditProduk;