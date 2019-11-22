import React from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../actions';
import BlogForm from './BlogForm';

class BlogCreate extends React.Component {
    onSubmit = (formValue) => {
        this.props.createBlog(formValue);
    };


    render() {
        return (
           <div>
               <h3>Create a Blog</h3>
               <BlogForm onSubmit={this.onSubmit} />
           </div>  
        );
    }
};

export default connect(null, { createBlog})(BlogCreate);