import React, {Component} from 'react';
import {Post} from "../../../store/state";
import PostCardContainer from "./PostCardContainer";
import {PostListProps} from "./PostsListContainer";

interface PostsListState {
    posts: Post[];
}

class PostsList extends Component<PostListProps,PostsListState> {

    constructor(props:PostListProps) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    public handleToggle(event:any): void {
        event.preventDefault();
        this.props.togglePosts()
    }

    render() {
        if(this.props.postsVisible) {
            return (
                <div>
                    <div>
                        <div id="posts-header">
                            <h2>Posts</h2>
                            <span><i className="material-icons show-hide" onClick={this.handleToggle}>expand_less</i> Hide</span>
                        </div>
                    </div>
                    <div>
                        {this.props.posts.map((post: Post) => (
                            <PostCardContainer id={post.id} key={post.id}/>
                        ))}
                    </div>
                </div>
            );
        } else {
            // if posts hidden
            return (
                <div>
                    <div>
                        <div id="posts-header">
                            <h2>Posts</h2>
                            <span><i className="material-icons show-hide" onClick={this.handleToggle}>expand_more</i>Show</span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default PostsList;