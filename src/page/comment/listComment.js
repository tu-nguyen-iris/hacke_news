import React from 'react'
import "./comment.scss"
export default function ListComment(props) {
    let { item } = props
    return (
        <div className="listComment">
            <span><span style={{ color: "blue" }}>{item.user}</span> on {item.time_ago}</span>
            <p>{item.content}
            </p>
            {item.comments.map(item1 => {
                return (
                    <div className="ml-3">
                        <span> <span style={{ color: "green" }}>{item1.user}</span> answered <span style={{ color: "blue" }}>{item.user}</span> on {item1.time_ago} </span>
                        <p>{item1.content}</p>
                        {item1.comments.map(item2 => {
                            return (
                                <div className="ml-4">
                                    <span><span style={{ color: "red" }}>{item2.user}</span> answered  <span style={{ color: "green" }}>{item1.user}</span> on {item2.time_ago}</span>
                                    <p>
                                        {item2.content.length > 100 ? item2.content.substr(0, 200) + "..." : item2.content}
                                        {/* khac phuc responsive page.. */}

                                    </p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}

        </div>
    )
}
