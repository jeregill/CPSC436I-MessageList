import React, {Component} from 'react';
import './InputCard.css';

class InputCard extends Component {

    public static propTypes = {};

    render() {
        return (
            <div className="input-card">
                <div className="header-footer-container header">
                <h3>Create Post</h3>
                </div>
                <div id="input-container">
                    <i className="material-icons" id="icon-post">account_circle</i>
                    <form>
                        <textarea rows={3} maxLength={300} placeholder="What's on your mind?"/>
                    </form>
                </div>
                <div className="header-footer-container footer side-by-side-button-container">
                    <button className="side-by-side-buttons" id="post-button">Post</button>
                    <button className="side-by-side-buttons" id="clear-button">Clear</button>
                </div>
            </div>
        );
    }
}

InputCard.propTypes = {};

export default InputCard;