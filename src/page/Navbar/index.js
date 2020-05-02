import React from 'react'
import "./navBar.scss"
import * as action from "./../../redux/action/index"
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
function Navbar(props) {
    const islogin = () => {
        if (localStorage.getItem("user")) {
            let user = JSON.parse(localStorage.getItem("user"))
            return (
                <li style={{ listStyle: "none" }}>
                    <a style={{ textDecoration: "none", color: "black", }} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Hi,{user.hoTen}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink style={{ textDecoration: "none", color: "black" }} to="/" onClick={() => {
                            localStorage.removeItem("user")
                            window.location.reload()
                        }} ><a className="dropdown-item" href="#">Log out</a></NavLink>

                    </div>
                </li>
            )
        } return (
            <NavLink className="nav-link" to="/login"> <p>Login</p></NavLink>
        )
    }
    return (
        <section>
            <nav className="navbar navbarHome  container ">
                <div className="row"></div>
                <NavLink className="navbar-brand col-xl-2 col-lg-2 col-md-3 col-2" to="/"><img src="./img/logo-hn-search-a822432b.png" />
                    <p>Search <br /> <span>Hacker News</span> </p>
                </NavLink>
                <div className="input col-xl-7 col-lg-7 col-md-6 col-7" id="collapsibleNavId">
                    <form className="form">
                        <i class="fa fa-search" aria-hidden="true" />
                        <input onChange={(e) => {
                            props.onSearch(e.target.value)
                        }} className="form-control mr-sm-2" type="text" placeholder="Search" />
                    </form>
                </div>
                <div className="name col-xl-2 col-lg-2 col-md-2 col-3" >
                    {islogin()}
                </div>
            </nav>

        </section>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        onSearch: (e) => {
            dispatch(action.search(e))
        }
    }
}
export default connect(null, mapDispatchToProps)(Navbar)