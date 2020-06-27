import React, {Component} from 'react';
import './Comment.css';
import '../../styles/card.css';
import '../../styles/global.css';

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