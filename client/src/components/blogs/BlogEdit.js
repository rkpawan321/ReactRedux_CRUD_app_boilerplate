import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchBlog, editBlog} from '../../actions';
import BlogFrom from './BlogForm';
class BlogEdit extends React.Component {
    componentDidMount(){
        this.props.fetchBlog(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editBlog(this.props.match.params.id, formValues);
    }

    render(){ 
        if(!this.props.blog){
            return <div>Loading...</div>
        }      return(
          <div>
              <h3>Edit a blog</h3> 
              <BlogFrom 
            //   initialValues={{ title: 'EDIT ME', description: 'CHANGE ME TOO'}} 
              initialValues={_.pick(this.props.blog, 'title', 'description')} 
              onSubmit={this.onSubmit}
              />
          </div>
      );
    } 

}
    
// ownProps  : This is actually a reference to props object which is in BlogEdit
//We can't access them in places other than BlogEdit
//So we use ownProps

const mapStateToProps = (state, ownProps) => {
   // console.log(ownProps);
    return {blog : state.blogs[ownProps.match.params.id] };  //Blog
    // that user is trying to edit
}
export default connect(mapStateToProps,{fetchBlog, editBlog})(BlogEdit); 