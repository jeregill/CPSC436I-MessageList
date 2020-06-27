import {Post, State} from "../../store/state";
import {connect} from "react-redux";
import PostCardDetailed from "./PostCardDetailed";

interface PostCardDetailedStateToProps {
    post: Post;
    poster:string;
    currentUserID: string;
}

interface PostCardDetailedOwnProps {
    postID: string;
    closeFocusView: () => void;
}

export type PostCardDetailedProps = PostCardDetailedStateToProps & PostCardDetailedOwnProps;

const mapStateToProps = (state: State, ownProps: PostCardDetailedOwnProps): PostCardDetailedStateToProps => {
    const { posts, currentUser, users } = state;
    const currPost = posts.find(p => p._id === ownProps.postID);
    // @ts-ignore
    const posterName = users.find(u=> u._id === currPost.userID)
    return {
        post: currPost,
        // @ts-ignore
        poster: posterName.name,
        currentUserID: currentUser._id
    } as PostCardDetailedStateToProps
}

export default connect<PostCardDetailedStateToProps,{}, PostCardDetailedOwnProps, State>
(mapStateToProps)(PostCardDetailed);
