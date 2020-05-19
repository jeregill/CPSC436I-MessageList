import React, {ChangeEvent, Component} from 'react';
// import PropTypes from 'prop-types';
import './InputCard.css';
import {Post} from "../../../store/state";

interface PostInputState {
    textContent: string;
    username: string;
}

class InputCard extends Component<any, PostInputState> {

    constructor(props: any) {
        super(props);
        this.state = {
            textContent: '',
            username: this.props.username
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitPost = this.handleSubmitPost.bind(this);
    }

    public handleSubmitPost(event: any): void {
        event.preventDefault();
        this.setState({textContent: ''});
        this.props.submitPost(this.createPost);
    }

    public handleChange(event: ChangeEvent<HTMLElement>): void{
        event.preventDefault();
        this.setState({textContent: (event.target as HTMLInputElement).value})
    }

    public isTextAreaEmpty(): boolean {
        return this.state.textContent === '' || this.state.textContent === null || this.state.textContent === undefined;
    }

    public createPost(): Post {
        return {
            user: this.state.username,
            likes: 0,
            comments: [],
            content: this.state.textContent,
            visible: true
        };
    }

    render() {
        return (
            <div className="input-card">
                <div className="header-footer-container header">
                <h3>Create Post</h3>
                </div>
                <form>
                <div id="input-container">
                    <i className="material-icons" id="icon-post">account_circle</i>
                        <textarea  rows={3} maxLength={300} placeholder={ "What's on your mind, " + this.state.username + "?" }
                                   value={this.state.textContent}
                                   onChange={this.handleChange}/>
                </div>
                <div className="header-footer-container footer side-by-side-button-container">
                    <button type="button" className="side-by-side-buttons" id="post-button"
                            onClick={this.handleSubmitPost}
                            disabled={this.isTextAreaEmpty()}>Post</button>
                    <button type="button" className="side-by-side-buttons" id="clear-button"
                            disabled={this.isTextAreaEmpty()}>Clear</button>
                </div>
                </form>
            </div>
        );
    }
}

export default InputCard;