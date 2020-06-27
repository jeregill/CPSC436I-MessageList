import React, {Component} from 'react';
import './PostCard.css';
import '../../styles/card.css';
import '../../styles/global.css';
import {PostCardDetailedProps} from "./PostCardDetailedContainer";


class PostCardDetailed extends Component<PostCardDetailedProps, {}> {

    constructor(props: PostCardDetailedProps) {
        super(props);
        this.handleClose=this.handleClose.bind(this);
    }

    public handleClose(){
        this.props.closeFocusView();
    }

    render() {
        return (
            <div className="pop-up">
                <div className="pop-up-content card">
                    <p className="focused-paragraph"><span className="focused-span">Post:</span> {this.props.post.content}</p>
                    <p className="focused-paragraph"><span className="focused-span">Author:</span>  {this.props.poster}</p>
                    <p className="focused-paragraph"><span className="focused-span">Score:</span>  {this.props.post.likes - this.props.post.dislikes}</p>
                    <i className="material-icons hoverable" id="right"  onClick={this.handleClose}>cancel</i>
                </div>
            </div>
        );
    }
}

export default PostCardDetailed;