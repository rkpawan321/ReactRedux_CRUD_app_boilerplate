import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchBlog} from '../../actions';
class BlogShow extends React.Component {
    componentDidMount(){
        this.props.fetchBlog(this.props.match.params.id);
    }

    render(){ 
        if(!this.props.stream){
            return <div>Loading...</div>
        }  
        const { title, description } = this.props.stream;
       return(
           <div>
    <h1> {title}</h1>
       <h3>{description}</h3>
           </div>
       );
    }

}

const mapStateToProps = (state, ownProps) => {
   // console.log(ownProps);
    return {stream : state.streams[ownProps.match.params.id] };  //Stream that user is trying to edit
}
export default connect(mapStateToProps,{fetchBlog})(BlogShow); 