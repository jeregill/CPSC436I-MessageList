import React, {Component} from 'react';
import '../../../styles/card.css';
import './PostCard.css';
import {PostCardProps} from "./PostCardContainer";


class PostCard extends Component<PostCardProps, {}> {

    constructor(props: PostCardProps) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
    }

    public handleLike(event:any){
        event.preventDefault();
        if (this.props.post.id != null) {
            this.props.likePost(this.props.post.id);
        }
    }

    render() {
        return (
            <div id="posts-content">
                <div className="card">
                    <div className="header-footer header dual-container">
                        <h3>{this.props.post.user} posted something</h3>

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
                                    <span className="right">{this.props.post.comments.length} &#x1f4ac;</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-footer footer tri-icon-container">
                            <div className="post-reactions">
                                <i className="material-icons" onClick={this.handleLike}>thumb_up</i>
                            </div>
                            <div className="post-reactions">
                                <i className="material-icons">thumb_down</i>
                            </div>
                            <div className="post-reactions">
                                <i className="material-icons">comment</i>
                            </div>
                        </div>

                </div>
            </div>
        );
    }
}


export default PostCard;