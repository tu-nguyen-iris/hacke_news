import React, { Component, Fragment } from 'react'
import axios from "axios"
import "./index.scss"
import ReactPaginate from "react-paginate"
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    user = localStorage.getItem("user")
    receivedData() {
        axios
            .get(`https://api.hnpwa.com/v0/show/1.json`)
            .then(res => {
                this.setState({ data: res.data })
                let data = res.data
                data = data.filter(item => item.title.toLowerCase().indexOf(this.props.keyword.toLowerCase()) !== -1)
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(item => <React.Fragment>
                    <div className="homeItem -fluid">
                        <div className="row homeItem1">
                            <p> <NavLink to={this.user ? `/comment/${item.id}` : "/login"}>
                                <p>{item.title}</p>
                            </NavLink></p>
                            <a target="_blank" href={item.url}>({item.url})</a>
                        </div>
                        <div className="homeItem2">
                            <span style={{ borderRight: "1px solid #828282" }}>{item.points} points</span>
                            <span style={{ borderRight: "1px solid #828282" }}>{item.user}</span>
                            <span style={{ borderRight: "1px solid #828282" }} >{item.time_ago}</span>
                            <span>{item.comments_count} Comment</span>
                        </div>
                    </div>
                </React.Fragment >)
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            });
    }
    componentDidUpdate() {
        if (this.props.keyword.length > 0) {
            return this.receivedData()
        }
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };
    componentDidMount() {
        this.receivedData()
    }

    render() {

        return (
            <section>
                <Navbar />
                <div className="container demo">
                    <div className="demoItem1">
                        {this.state.postData}

                    </div>
                    <ReactPaginate

                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination "}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        keyword: state.itemReducer.keyword
    }
}

export default connect(mapStateToProps, null)(Home)