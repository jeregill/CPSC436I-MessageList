import {Post, State} from "../../../store/state";
import {action, addPost} from "../../../actions/actions";
import {connect} from "react-redux";
import InputCard from "./InputCard";
import {Dispatch} from "react";

interface InputCardStateToProps {
  username: string;
}

interface InputCardDispatchToProps {
  submitPost: (post: Post) => void;
}

export type InputCardProps = InputCardStateToProps & InputCardDispatchToProps


const mapStateToProps = (state: State): InputCardStateToProps => {
  const { currentUser } = state;
  return {
    username: currentUser.name
  }
}

const mapDispatchToProps = (dispatch: Dispatch<action>): InputCardDispatchToProps => {
  return {
    submitPost: (post: Post) => dispatch(addPost(post))
  }
}

export default connect<InputCardStateToProps, InputCardDispatchToProps, {}, State>(
    mapStateToProps, mapDispatchToProps)(InputCard);
