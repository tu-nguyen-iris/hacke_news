import React, { useEffect } from 'react'
import * as action from "./../../redux/action/index"
import { connect } from 'react-redux'
import "./comment.scss"
import { NavLink } from "react-router-dom"
import ListComment from './listComment'
function Comment(props) {
    console.log(props.comment)
    let { comment } = props
    useEffect(() => {
        const id = props.match.params.id
        props.getComment(id)
    }, [])

    const listComment = () => {
        if (comment.comments) {
            return comment.comments.map((item, index) => <ListComment key={index} item={item} />)
        }
    }
    return (
        <section className="comment" >
            <nav className="navbar navBarComment navbar-expand-sm navbar-light" >
                <NavLink className="navbar-brand" to="/">
                    <img src="/img/logo-hn-search-a822432b.png" />
                    <p>Hacker News</p>

                </NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* mt-2 mt-lg-0 */}
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/news">New </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/past">Past </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/submit">Submit </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="container ">

                <div className="commentBody container">
                    <div className="commentTitle ">
                        <p>{comment.title}</p>
                        <div className="row mt-3 container-fluid">
                            <span className="col-xl-3 col-md-5 col-9">{comment.points} points by {comment.user} on {comment.time_ago}</span>
                            <span className="col-xl-1 col-md-2 col-2 borderItem">{comment.domain}</span>
                            <span className="col-xl-1 col-md-2 col-12 borderItem">{comment.comments_count} Comment</span>
                        </div>
                    </div>
                    {listComment()}
                </div>



            </div>

        </section>
    )


}
const mapStateToProps = (state) => {
    return {
        comment: state.itemReducer.comment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getComment: id => {
            dispatch(action.getComment(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)

//     < nav class="navbar navbar-expand-sm navbar-light bg-light" >
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
//             aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="collapsibleNavId">
//             <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//                 <li class="nav-item active">
//                     <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
//                     <div class="dropdown-menu" aria-labelledby="dropdownId">
//                         <a class="dropdown-item" href="#">Action 1</a>
//                         <a class="dropdown-item" href="#">Action 2</a>
//                     </div>
//                 </li>
//             </ul>
//             <form class="form-inline my-2 my-lg-0">
//                 <input class="form-control mr-sm-2" type="text" placeholder="Search">
//                     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>
//     </div>
// </nav>