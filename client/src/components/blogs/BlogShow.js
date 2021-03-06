import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchBlog} from '../../actions';
class BlogShow extends React.Component {
    componentDidMount(){
        this.props.fetchBlog(this.props.match.params.id);
    }

    render(){ 
        if(!this.props.blog){
            return <div>Loading...</div>
        }  
        const { title, description, content } = this.props.blog;
       return(
           <div style={{padding: 30}}>
    <h1> {title}</h1>
       <h3>{description}</h3>
       <h3>{content}</h3>
           </div>
       );
    }

}

const mapStateToProps = (state, ownProps) => {
   // console.log(ownProps);
    return {blog : state.blogs[ownProps.match.params.id] };  //Blog that user is trying to edit
}
export default connect(mapStateToProps,{fetchBlog})(BlogShow); 