import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from "react-redux"
import "./form.scss"
import * as Yup from "yup"
import * as action from "./../../redux/action/index"
const validation = Yup.object().shape({
    hoTen: Yup.string().required("Name is required!"),
    email: Yup.string().required("Email is required!")
        .email("Email not Valid"),
    taiKhoan: Yup
        .string().required("Account is required!"),
    soDt: Yup.string()
        .required("Phone Number is required!"),
    matKhau: Yup.string().required("Password is required!"),



})

class FormModal extends Component {

    handleSubmit = value => {
        this.props.register(value)
        document.getElementById("exampleForm").reset();
    }
    render() {
        return (
            <div className="formM">
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close ml-auto m-3" data-dismiss="modal" style={{ color: "red", fontSize: "2em" }} aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <Formik
                                    initialValues={
                                        {
                                            taiKhoan: "",
                                            matKhau: "",
                                            email: "",
                                            soDt: "",
                                            maNhom: "GP01",
                                            maLoaiNguoiDung: "KhachHang",
                                            hoTen: ""

                                        }
                                    }
                                    validationSchema={validation}

                                    onSubmit={this.handleSubmit}
                                    render={(formikProps) => {
                                        return <Form id="exampleForm">
                                            <p>REGISTER</p>
                                            <Field
                                                type="email"
                                                onChange={formikProps.handleChange}
                                                name="email"
                                                placeholder="Email"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="email">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>

                                            <Field
                                                type="text"
                                                onChange={formikProps.handleChange}
                                                name="taiKhoan"
                                                placeholder="Account"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="taiKhoan">
                                                {msg => <div className="alert alert-danger">{msg}</div>}
                                            </ErrorMessage>

                                            <Field
                                                type="password"
                                                onChange={formikProps.handleChange}
                                                name="matKhau"
                                                placeholder="Password"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="matKhau">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>

                                            <Field
                                                type="number"
                                                placeholder="Phone Number"
                                                onChange={formikProps.handleChange}
                                                name="soDt"
                                                className="formInput"
                                            />
                                            <ErrorMessage name="soDt">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>

                                            <Field
                                                type="text"
                                                onChange={formikProps.handleChange}
                                                name="hoTen"
                                                className="formInput"
                                                placeholder="Name"
                                            />
                                            <ErrorMessage name="hoTen">
                                                {msg => <div className="alert alert-danger">{msg}</div>}

                                            </ErrorMessage>

                                            <div className="mt-4">
                                                <button type="submit" className="btn btn-success ">Add</button>
                                                <button type="button" className="btn btn-secondary ml-3" data-dismiss="modal">Close</button>
                                            </div>
                                        </Form>
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (data) => {
            dispatch(action.register(data))
        }
    }
}
export default connect(null, mapDispatchToProps)(FormModal)