import {Post, State} from "../../store/state";
import {
    deletePostAsync,
    dislikePostAsync,
    editPostAsync,
    likePostAsync,
    toggleComments
} from "../../actions/actions";
import {connect} from "react-redux";
import PostCard from "./PostCard";

interface PostCardStateToProps {
    post: Post;
    poster:string;
    currentUserID: string;
}

interface PostCardDispatchToProps {
    likePostAsync: (id: string) => void;
    dislikePostAsync: (id: string) => void;
    showComments: (id:string) => void;
    editPostAsync: (id:string, editedContent: string, date: string) => void;
    deletePostAsync: (id:string) => void;
}

interface PostCardOwnProps {
    id: string;
}

export type PostCardProps = PostCardStateToProps & PostCardDispatchToProps & PostCardOwnProps;

const mapStateToProps = (state: State, ownProps: PostCardOwnProps): PostCardStateToProps => {
    const { posts, currentUser, users } = state;
    const currPost = posts.find(p => p._id === ownProps.id);
    // @ts-ignore
    let posterName = users.find(u=> u._id === currPost.userID);
    return {
        post: currPost,
        // @ts-ignore
        poster: posterName.name,
        currentUserID: currentUser._id
    } as PostCardStateToProps
}

const mapDispatchToProps = (dispatch: any): PostCardDispatchToProps => {
    return {
        likePostAsync: (id: string) => dispatch(likePostAsync(id)),
        dislikePostAsync: (id: string) => dispatch(dislikePostAsync(id)),
        showComments: (id: string) => dispatch(toggleComments(id)),
        editPostAsync: (id: string, editedContent:string, date: string) => dispatch(editPostAsync(id, editedContent, date)),
        deletePostAsync: (id:string) => dispatch(deletePostAsync(id)),
    }
}

export default connect<PostCardStateToProps, PostCardDispatchToProps, PostCardOwnProps, State>
    (mapStateToProps, mapDispatchToProps)(PostCard);
