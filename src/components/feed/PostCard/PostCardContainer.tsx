import {Post, State} from "../../../store/state";
import {dislikePost, likePost, toggleComments} from "../../../actions/actions";
import {connect} from "react-redux";
import PostCard from "./PostCard";

interface PostCardStateToProps {
    post: Post;
    username:string;
}

interface PostCardDispatchToProps {
    likePost: (id: number) => void;
    dislikePost: (id: number) => void;
    showComments: (id:number) => void;

}

interface PostCardOwnProps {
    id: number;
}

export type PostCardProps = PostCardStateToProps & PostCardDispatchToProps & PostCardOwnProps;

const mapStateToProps = (state: State, ownProps: PostCardOwnProps): PostCardStateToProps => {
    const { posts, currentUser } = state;
    return {
        post: posts.find(p => p.id === ownProps.id),
        username: currentUser.name
    } as PostCardStateToProps
}

const mapDispatchToProps = (dispatch: any): PostCardDispatchToProps => {
    return {
        likePost: (id: number) => dispatch(likePost(id)),
        dislikePost: (id: number) => dispatch(dislikePost(id)),
        showComments: (id: number) => dispatch(toggleComments(id))
    }
}

export default connect<PostCardStateToProps, PostCardDispatchToProps, PostCardOwnProps, State>
    (mapStateToProps, mapDispatchToProps)(PostCard);
