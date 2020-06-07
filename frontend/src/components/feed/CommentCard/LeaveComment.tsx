import React, {ChangeEvent, Component} from 'react';
import './Comment.css';
import {CommentCardProps} from "./LeaveCommentContainer";

interface CommentState {
    textContent: string;
}

class LeaveComment extends Component<CommentCardProps, CommentState> {

    constructor(props: any) {
        super(props);
        this.state = {textContent: ''};
        this.handleCommentPost = this.handleCommentPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    public handleCommentPost(event:any): void {
        event.preventDefault();
        this.props.commentPost(this.props.id, this.state.textContent);
        this.setState({textContent: ''});
    }

    public handleChange(event: ChangeEvent<HTMLElement>): void{
        event.preventDefault();
        this.setState({textContent: (event.target as HTMLInputElement).value})
    }

    render() {
        return (
            <div className="comment">
                <form className="comment-container">
                  <textarea  rows={3} maxLength={300} placeholder={ "Leave a comment" }
                             value={this.state.textContent} onChange={this.handleChange}/>
                             <i className="material-icons" id="add-comment-icon" onClick={this.handleCommentPost}
                             style={{pointerEvents: this.state.textContent.trim() !== '' ? 'auto': 'none'}}>add_comment</i>
                </form>
            </div>
        );
    }
}
export default LeaveComment;