import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const { posts } = this.props;
        const postsItems = posts.map((post) => {
           return (
               <div key={post.id}>
                   <h2>{post.title}</h2>
                   <p>{post.body}</p>
               </div>
           );
        });
        return (
            <div>
                <h1>POSTS</h1>
                {postsItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);