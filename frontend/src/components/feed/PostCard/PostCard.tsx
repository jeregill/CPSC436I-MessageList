import React, {Component} from 'react';
import '../../../styles/card.css';
import './PostCard.css';
import {PostCardProps} from "./PostCardContainer";
import CommentListContainer from "../CommentCard/CommentListContainer";
import LeaveCommentContainer from "../CommentCard/LeaveCommentContainer";
import PostCardDetailedContainer from "./PostCardDetailedContainer";
import {dateToString} from "../../../store/state";

interface PostCardState {
    leaveComment: boolean;
    editPost: boolean;
    editedContent: string;
    focusView: boolean;
}

class PostCard extends Component<PostCardProps, PostCardState> {

    constructor(props: PostCardProps) {
        super(props);
        this.state = {leaveComment: false, editPost: false, editedContent: this.props.post.content, focusView: false};
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.showComments= this.showComments.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.submitEdit= this.submitEdit.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.focusView = this.focusView.bind(this);
        this.closeFocusView = this.closeFocusView.bind(this);
    }

    public handleLike(event:any){
        event.preventDefault();
        if (this.props.post._id != null) {
            this.props.likePostAsync(this.props.post._id);
        }
    }

    public handleDislike(event:any){
        event.preventDefault();
        if (this.props.post._id != null) {
            this.props.dislikePostAsync(this.props.post._id);
        }
    }

    public handleDelete(event:any){
        event.preventDefault();
        if (this.props.post._id != null) {
            this.props.deletePostAsync(this.props.post._id);
        }
    }

    public handleComment(event:any){
        event.preventDefault();
        this.setState({leaveComment: !this.state.leaveComment});
    }

    public showComments(event:any) {
        event.preventDefault();
        this.setState({leaveComment: false})
        this.props.showComments(this.props.post._id);
    }

    public handleEdit(event: any) {
        event.preventDefault();
        this.setState({editPost: !this.state.editPost})
    }

    public handleEditChange(event:any){
        event.preventDefault();
        this.setState({editedContent: (event.currentTarget as HTMLInputElement).innerHTML})
    }

    public submitEdit(event:any) {
        event.preventDefault();
        this.props.editPostAsync(this.props.post._id, this.state.editedContent, dateToString());
        this.setState({editPost: false})
    }

    public focusView(event:any) {
        event.preventDefault();
        this.setState({focusView: true});
    }

    public closeFocusView() {
        this.setState({focusView: false});
    }


    render() {
        return (
            <div id="posts-content">
                <div className="card" style={{marginBottom: this.state.leaveComment || this.props.post.commentsVisible ? '0': '2vh'}}>
                    <div className="header-footer header dual-container">
                        <div className="post-and-date">
                        <h3 className="hoverable" onClick={this.focusView}>{this.props.poster} posted something</h3>
                            <p className="date-text">{"Posted on " + this.props.post.date}</p>
                        </div>
                        {this.props.currentUserID === this.props.post.userID &&
                        (<div className="side-by-side-icons">
                            <i className="material-icons show-hide" onClick={this.handleEdit}>edit</i>
                            <i className="material-icons show-hide" onClick={this.handleDelete}>delete</i>
                        </div>)}
                        {this.state.focusView && (
                            <div>
                                <PostCardDetailedContainer postID={this.props.id} closeFocusView={this.closeFocusView}/>
                            </div>)}
                    </div>
                        <div id="text-container">
                            <p contentEditable={this.state.editPost} onInput={this.handleEditChange} suppressContentEditableWarning={true}>{this.props.post.content}</p>
                            {this.state.editPost && (<button onClick={this.submitEdit} type="button" id="submit-edit-button">Submit Edit</button>)}
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
                {this.state.leaveComment && (<LeaveCommentContainer id={this.props.post._id}/>)}
                {this.props.post.commentsVisible && (<CommentListContainer id={this.props.post._id}/>)}

            </div>
        );
    }
}


export default PostCard;