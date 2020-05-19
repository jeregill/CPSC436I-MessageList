import {Post, State} from "../../../store/state";
import {POST_ACTIONS} from "../../../actions/actions";
import {connect} from "react-redux";
import InputCard from "./InputCard";

function mapStateToProps (state: State): any {
  const { posts, currentUser } = state;
  return {
    username: currentUser.name
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    submitPost: (post: Post) => dispatch({type: POST_ACTIONS.ADD_POST, payload: post})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCard);
