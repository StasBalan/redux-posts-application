import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import { createPost} from '../actions/postActions';

class PostForm extends Component {

    state = {
        title: '',
        body: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post);
    };

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>POST FORM</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br/>
                        <input type="text" name="title" onChange={this.onChange} value={title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label>
                        <br/>
                        <textarea name="body" onChange={this.onChange} value={body}/>
                    </div>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propType = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);