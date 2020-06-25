import {State} from "../../../store/state";
import {action, toggleComments} from "../../../actions/actions";
import {connect} from "react-redux";
import {Dispatch} from "react";
import CommentList from "./CommentList";

interface CommentListStateToProps {
    comments: string[];
    commentsVisible:boolean
}

interface CommentListDispatchToProps {
    toggleComments: (id: string) => void;
}
interface CommentListOwnProps {
    id: string;
}

export type CommentListProps = CommentListStateToProps & CommentListDispatchToProps & CommentListOwnProps;

const mapStateToProps = (state: State, ownProps: CommentListOwnProps): CommentListStateToProps => {
    const { posts } = state;
    const post = posts.find(post => post.id === ownProps.id);
    if(post !== undefined) {
        return {
            comments: post.comments,
            commentsVisible: true
        }
    } else return { comments: [], commentsVisible: false};
}

const mapDispatchToProps = (dispatch: Dispatch<action>): CommentListDispatchToProps => {
    return {
        toggleComments: (id: string) => dispatch(toggleComments(id))
    }
}

export default connect<CommentListStateToProps, CommentListDispatchToProps, CommentListOwnProps, State>
    (mapStateToProps, mapDispatchToProps)(CommentList);
