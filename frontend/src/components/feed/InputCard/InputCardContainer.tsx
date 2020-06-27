import {Post, State} from "../../../store/state";
import {action, addPostAsync} from "../../../actions/actions";
import {connect} from "react-redux";
import InputCard from "./InputCard";
import {Dispatch} from "react";

interface InputCardStateToProps {
  username: string;
  userID: string;
}

interface InputCardDispatchToProps {
  submitPostAsync: (post: Post) => void;
}

export type InputCardProps = InputCardStateToProps & InputCardDispatchToProps


const mapStateToProps = (state: State): InputCardStateToProps => {
  const { currentUser } = state;
  return {
    username: currentUser.name,
    userID: currentUser._id
  }
}

const mapDispatchToProps = (dispatch: Dispatch<action>): InputCardDispatchToProps => {
  return {
    // @ts-ignore
    submitPostAsync: (post: Post) => dispatch(addPostAsync(post))
  }
}

export default connect<InputCardStateToProps, InputCardDispatchToProps, {}, State>(
    mapStateToProps, mapDispatchToProps)(InputCard);
