import React, {Component} from 'react';
import '../../../styles/card.css';
import './PostCard.css';

class PostCard extends Component {
    public static propTypes: {};
    render() {
        return (
            <div id="posts-content">
                <div id="posts-header">
                <h2>Posts</h2>
                    <span><i className="material-icons">expand_less</i> Hide</span>
                </div>
                <div className="card">
                    <div className="header-footer header dual-container">
                        <h3>Someone posted something</h3>

                    </div>
                        <div id="text-container">
                            <p>hello there</p>
                            <div className="tri-count-container">
                                <div></div>
                                <div className="post-reactions-count">
                                    <span>10 &#x1f44d;</span>
                                </div>
                                <div className="post-reactions-count">
                                    <span>10 &#x1f44e;</span>
                                </div>
                                <div className="post-reactions-count">
                                    <span className="right">10 &#x1f4ac;</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-footer footer tri-icon-container">
                            <div className="post-reactions">
                                <i className="material-icons">thumb_up</i>
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