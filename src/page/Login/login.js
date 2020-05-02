import React, { useState } from 'react'
import './Login.scss'
import { connect } from "react-redux"
import * as action from "./../../redux/action/index"
import { NavLink } from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormModal from "./Modal"
function Login(props) {
    const [user, setuser] = useState({
        taiKhoan: "",
        matKhau: ""
    })
    const handleOnSubmit = e => {
        e.preventDefault()
        props.login(user, props.history)
    }
    const handleOnChange = e => {
        let { name, value } = e.target
        setuser({
            ...user,
            [name]: value
        })
    }


    return (
        <div className="login"  >
            <Paper className="formLogin" elevation={5}>
                <h3>Sign In</h3>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Account</label>
                        <input name="taiKhoan" type="text" onChange={handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your account" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name="matKhau" type="password" onChange={handleOnChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <Button type="submit" variant="contained" color="primary">
                        Login
</Button>
                    <p>Have not Account yet?  <a style={{ color: "red", cursor: " wait" }} data-toggle="modal" data-target="#exampleModalCenter">
                        Register
                    </a>  </p>

                    <p>Return Home...<NavLink to="/">Home</NavLink> </p>
                </form>
                <FormModal />
            </Paper>
        </div >


    )
}
const mapDispatchToProps = dispatch => {
    return {
        login: (user, history) => {
            dispatch(action.login(user, history))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
