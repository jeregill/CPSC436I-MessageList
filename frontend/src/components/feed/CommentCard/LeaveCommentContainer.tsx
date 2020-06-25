import {State} from "../../../store/state";
import {action, commentPost} from "../../../actions/actions";
import {connect} from "react-redux";
import {Dispatch} from "react";
import LeaveComment from "./LeaveComment";

interface CommentStateToProps {
    username: string;
}

interface CommentDispatchToProps {
    commentPost: (id: string, commentContent: string) => void;
}

interface CommentOwnProps{
    id: string;
}

export type CommentCardProps = CommentStateToProps & CommentDispatchToProps & CommentOwnProps


const mapStateToProps = (state: State): CommentStateToProps => {
    const { currentUser} = state;
    return {
        username: currentUser.name,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<action>): CommentDispatchToProps => {
    return {
        commentPost: (id: string, commentContent: string) => dispatch(commentPost(id, commentContent))
    }
}

export default connect<CommentStateToProps, CommentDispatchToProps, CommentOwnProps, State>(
    mapStateToProps, mapDispatchToProps)(LeaveComment);
