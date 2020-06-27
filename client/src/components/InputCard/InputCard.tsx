import React, {ChangeEvent, Component} from 'react';
import './InputCard.css';
import '../../styles/card.css';
import '../../styles/global.css';
import {Post} from "../../store/state";
import {InputCardProps} from "./InputCardContainer";
import {dateToString} from "../../utils/utils";

interface InputCardState {
    textContent: string;
    username: string;
}


class InputCard extends Component<InputCardProps, InputCardState> {


    constructor(props: InputCardProps) {
        super(props);
        this.state = {
            textContent: '',
            username: this.props.username
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitPost = this.handleSubmitPost.bind(this);
        this.handleClearPost = this.handleClearPost.bind(this);
    }

    public handleSubmitPost(event:any): void {
        event.preventDefault();
        this.setState({textContent: ''});
        this.props.submitPostAsync(this.createPost());
    }

    public handleChange(event: ChangeEvent<HTMLElement>): void{
        event.preventDefault();
        this.setState({textContent: (event.target as HTMLInputElement).value})
    }

    public isTextAreaEmpty(): boolean {
        return this.state.textContent === '' || this.state.textContent === null || this.state.textContent === undefined;
    }

    public handleClearPost(event:any): void {
        event.preventDefault();
        this.setState({textContent: ''});
    }



    public createPost(): Post {
        return {
            userID: this.props.userID,
            _id: '-1',
            likes: 0,
            dislikes: 0,
            comments: [],
            commentsVisible: false,
            content: this.state.textContent,
            date: dateToString()
        };
    }

    render() {
        return (
            <div className="card">
                <div className="header-footer header">
                <h3>Create Post</h3>
                </div>
                <form>
                <div id="input-container">
                    <i className="material-icons" id="icon-post">account_circle</i>
                        <textarea  rows={3} maxLength={300} placeholder={ "What's on your mind, " + this.state.username + "?" }
                                   value={this.state.textContent}
                                   onChange={this.handleChange}/>
                </div>
                <div className="header-footer footer side-by-side-button-container">
                    <button type="button" className="side-by-side-buttons" id="post-button"
                            onClick={this.handleSubmitPost}
                            disabled={this.isTextAreaEmpty()}>Post</button>
                    <div className="divider"></div>
                    <button type="button" className="side-by-side-buttons" id="clear-button"
                            disabled={this.isTextAreaEmpty()}
                    onClick={this.handleClearPost}>Clear</button>
                </div>
                </form>
            </div>
        );
    }
}

export default InputCard;