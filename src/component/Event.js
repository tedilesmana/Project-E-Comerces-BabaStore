import React,{Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama   : '',
            alamat : '',
            hobi   : '',
            umur: null
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        let umur = this.state.umur;
        if (!Number(umur)) {
            alert("silahkan isi usia anda terlebih dahulu");
        }
    }

    onChangeHandler = (event) => {
        let nama   = event.target.name;
        let alamat = event.target.alamat;
        let hobi   = event.target.hobi;
        let val = event.target.value;
        this.setState({
            [nama]  : val,
            [alamat]:val,
            [hobi]: ''
        });
    }
  
    render() {
        return (

                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="12" className="p-5 card mb-5">
                    <form onSubmit={this.onSubmitHandler}>
                        <p className="h4 text-center mb-4">Selamat Datang, Are You Ready!!</p>
                        <hr/>
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                          Halo, Selamaht Datang..! {this.state.nama}
                        </label>
                        <input
                          type="text" onChange={this.onChangeHandler} name="nama" placeholder="masukan nama anda" required
                          className="form-control"
                        />
                        <br />
                        <label
                          htmlFor="defaultFormContactSubjectEx"
                          className="grey-text"
                        >
                          Hobi Kamu adalah: {this.state.hobi}
                        </label>
                        <input
                          type="text" onChange={this.onChangeHandler} name="hobi" placeholder="masukan hobi kamu"  required
                          id="defaultFormContactSubjectEx"
                          className="form-control"
                        /><br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                          Umur kamu adalah: {this.state.umur}
                        </label>
                        <input
                          type="text" onChange={this.onChangeHandler} name="umur" placeholder="isi usia anda"  required
                          id="defaultFormContactSubjectEx"
                          className="form-control"
                        />
                        <br />
                        <label
                          htmlFor="defaultFormContactMessageEx"
                          className="grey-text"
                        >
                          Anda tinggal di: {this.state.alamat}
                        </label>
                        <textarea
                          onChange={this.onChangeHandler} name="alamat"  placeholder="masukan alamat lengkap"
                          id="defaultFormContactMessageEx"
                          className="form-control"
                          rows="3"
                        />
                        <hr/>

                          <MDBBtn color="success" className="mt-4" outline type="submit" onClick = {this.updateState}  value="simpan data">
                            SUBMIT
                          </MDBBtn>
                        </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
        );
    }
}

export default Form;