import React, {Component} from 'react';
import '../../../styles/card.css';
import './PostCard.css';
import {PostCardProps} from "./PostCardContainer";
import CommentListContainer from "../CommentCard/CommentListContainer";
import LeaveCommentContainer from "../CommentCard/LeaveCommentContainer";

interface PostCardState {
    leaveComment: boolean;
}


class PostCard extends Component<PostCardProps, PostCardState> {

    constructor(props: PostCardProps) {
        super(props);
        this.state = {leaveComment: false};
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.showComments= this.showComments.bind(this);
    }

    public handleLike(event:any){
        event.preventDefault();
        if (this.props.post.id != null) {
            this.props.likePost(this.props.post.id);
        }
    }

    public handleDislike(event:any){
        event.preventDefault();
        if (this.props.post.id != null) {
            this.props.dislikePost(this.props.post.id);
        }
    }

    public handleComment(event:any){
        event.preventDefault();
        this.setState({leaveComment: !this.state.leaveComment});
    }

    public showComments(event:any) {
        event.preventDefault();
        this.setState({leaveComment: false})
        this.props.showComments(this.props.post.id);
    }


    render() {
        return (
            <div id="posts-content">
                <div className="card" style={{marginBottom: this.state.leaveComment || this.props.post.commentsVisible ? '0': '2vh'}}>
                    <div className="header-footer header dual-container">
                        <h3>{this.props.post.user} posted something</h3>
                        <i className="material-icons">edit</i>

                    </div>
                        <div id="text-container">
                            <p>{this.props.post.content}</p>
                            <div className="tri-count-container">
                                <div className="divider"></div>
                                <div className="post-reactions-count">
                                    <span>{this.props.post.likes} &#x1f44d;</span>
                                </div>
                                <div className="post-reactions-count">
                                    <span>{this.props.post.dislikes} &#x1f44e;</span>
                                </div>
                                <div className="post-reactions-count">
                                    <span className="right" id="show-comments" onClick={this.showComments}>{this.props.post.comments.length} &#x1f4ac;</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-footer footer tri-icon-container">
                            <div className="post-reactions">
                                <i className="material-icons" onClick={this.handleLike}>thumb_up</i>
                            </div>
                            <div className="post-reactions">
                                <i className="material-icons" onClick={this.handleDislike}>thumb_down</i>
                            </div>
                            <div className="post-reactions">
                                <i className="material-icons"  onClick={this.handleComment}>comment</i>
                            </div>
                        </div>
                </div>
                {this.state.leaveComment && (<LeaveCommentContainer id={this.props.post.id}/>)}
                {this.props.post.commentsVisible && (<CommentListContainer id={this.props.post.id}/>)}

            </div>
        );
    }
}


export default PostCard;