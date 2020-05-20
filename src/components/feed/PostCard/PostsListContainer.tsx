import {Post, State} from "../../../store/state";
import {action, togglePosts} from "../../../actions/actions";
import {connect} from "react-redux";
import PostsList from "./PostsList";
import {Dispatch} from "react";

interface PostListStateToProps {
    posts: Post[];
    postsVisible:boolean
}

interface PostListDispatchToProps {
    togglePosts: () => void;
}

export type PostListProps = PostListStateToProps & PostListDispatchToProps;

const mapStateToProps = (state: State): PostListStateToProps => {
    const { posts, postsVisible } = state;
    return {
        posts: posts,
        postsVisible: postsVisible
    }
}

const mapDispatchToProps = (dispatch: Dispatch<action>): PostListDispatchToProps => {
    return {
        togglePosts: () => dispatch(togglePosts())
    }
}

export default connect<PostListStateToProps, PostListDispatchToProps, {}, State>(mapStateToProps, mapDispatchToProps)(PostsList);
