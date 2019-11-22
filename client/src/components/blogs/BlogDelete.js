import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {fetchBlog, deleteBlog} from '../../actions';

class BlogDelete extends React.Component {

    componentDidMount(){
        this.props.fetchBlog(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <><button onClick={() => this.props.deleteBlog(id)} className="ui button negative">
                Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </>
        )
    }

    renderContent() {
        if(!this.props.blog){
            return 'Are you sure you want to delete the blog?'
        } 
        return `Are you sure you want to delete the blog with title :'${this.props.blog.title}'`
    }

    render() {
      
        return <div> 
    <Modal
                title="Delete Blog"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => { history.push('/') }}
            />
        </div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {blog : state.blogs[ownProps.match.params.id] };  //Blog that user is trying to edit
}

export default connect(mapStateToProps, {fetchBlog, deleteBlog})(BlogDelete);