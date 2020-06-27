import React, {Component} from 'react';
import {CommentListProps} from "./CommentListContainer";
import DisplayComment from "./DisplayComment";
import './Comment.css';
import '../../../styles/card.css';
import '../../../styles/global.css'


class CommentList extends Component<CommentListProps, {}> {

    render() {
        return (
            <div>
                <div className="header-footer comment-header">
                    <h4>Comments</h4>
                </div>
                <div>
                    {this.props.comments.map((comment: string, index) => (
                        <DisplayComment commentContent={comment} key={this.props.comments.indexOf(comment)} />
                    ))}
                </div>
            </div>
        );
    }
}

export default CommentList;




