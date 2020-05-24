import {Post, State} from "../../../store/state";
import {deletePost, dislikePost, editPost, likePost, toggleComments} from "../../../actions/actions";
import {connect} from "react-redux";
import PostCard from "./PostCard";

interface PostCardStateToProps {
    post: Post;
    poster:string;
    currentUserID: number;
}

interface PostCardDispatchToProps {
    likePost: (id: number) => void;
    dislikePost: (id: number) => void;
    showComments: (id:number) => void;
    editPost: (id:number, editedContent: string) => void;
    deletePost: (id:number) => void;
}

interface PostCardOwnProps {
    id: number;
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
        likePost: (id: number) => dispatch(likePost(id)),
        dislikePost: (id: number) => dispatch(dislikePost(id)),
        showComments: (id: number) => dispatch(toggleComments(id)),
        editPost: (id: number, editedContent:string) => dispatch(editPost(editedContent,id)),
        deletePost: (id:number) => dispatch(deletePost(id))
    }
}

export default connect<PostCardStateToProps, PostCardDispatchToProps, PostCardOwnProps, State>
    (mapStateToProps, mapDispatchToProps)(PostCard);
