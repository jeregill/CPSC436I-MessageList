import {Post, State} from "../../../store/state";
import {deletePost, dislikePost, editPost, likePost, toggleComments} from "../../../actions/actions";
import {connect} from "react-redux";
import PostCard from "./PostCard";

interface PostCardStateToProps {
    post: Post;
    poster:string;
    currentUserID: string;
}

interface PostCardDispatchToProps {
    likePost: (id: string) => void;
    dislikePost: (id: string) => void;
    showComments: (id:string) => void;
    editPost: (id:string, editedContent: string) => void;
    deletePost: (id:string) => void;
}

interface PostCardOwnProps {
    id: string;
}

export type PostCardProps = PostCardStateToProps & PostCardDispatchToProps & PostCardOwnProps;

const mapStateToProps = (state: State, ownProps: PostCardOwnProps): PostCardStateToProps => {
    const { posts, currentUser, users } = state;
    const currPost = posts.find(p => p.id === ownProps.id);
    // @ts-ignore
    const posterName = users.find(u=> u.id === currPost.userID)
    return {
        post: currPost,
        // @ts-ignore
        poster: posterName.name,
        currentUserID: currentUser.id
    } as PostCardStateToProps
}

const mapDispatchToProps = (dispatch: any): PostCardDispatchToProps => {
    return {
        likePost: (id: string) => dispatch(likePost(id)),
        dislikePost: (id: string) => dispatch(dislikePost(id)),
        showComments: (id: string) => dispatch(toggleComments(id)),
        editPost: (id: string, editedContent:string) => dispatch(editPost(editedContent,id)),
        deletePost: (id:string) => dispatch(deletePost(id))
    }
}

export default connect<PostCardStateToProps, PostCardDispatchToProps, PostCardOwnProps, State>
    (mapStateToProps, mapDispatchToProps)(PostCard);
