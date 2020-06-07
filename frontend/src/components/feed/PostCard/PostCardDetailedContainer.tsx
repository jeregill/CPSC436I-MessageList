import {Post, State} from "../../../store/state";
import {connect} from "react-redux";
import PostCardDetailed from "./PostCardDetailed";

interface PostCardDetailedStateToProps {
    post: Post;
    poster:string;
    currentUserID: number;
}

interface PostCardDetailedOwnProps {
    postID: number;
    closeFocusView: () => void;
}

export type PostCardDetailedProps = PostCardDetailedStateToProps & PostCardDetailedOwnProps;

const mapStateToProps = (state: State, ownProps: PostCardDetailedOwnProps): PostCardDetailedStateToProps => {
    const { posts, currentUser, users } = state;
    const currPost = posts.find(p => p.id === ownProps.postID);
    // @ts-ignore
    const posterName = users.find(u=> u.id === currPost.userID)
    return {
        post: currPost,
        // @ts-ignore
        poster: posterName.name,
        currentUserID: currentUser.id
    } as PostCardDetailedStateToProps
}

export default connect<PostCardDetailedStateToProps,{}, PostCardDetailedOwnProps, State>
(mapStateToProps)(PostCardDetailed);