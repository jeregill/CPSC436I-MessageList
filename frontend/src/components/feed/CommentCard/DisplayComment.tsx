import React, {Component} from 'react';
import './Comment.css';

interface DisplayCommentProps {
    commentContent: string;
}

class DisplayComment extends Component<DisplayCommentProps, {}>{

    render() {
        return (
            <div className="comment">
                <p>{this.props.commentContent}</p>
            </div>
        );
    }
}

export default DisplayComment;