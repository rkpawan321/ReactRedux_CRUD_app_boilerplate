import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamFrom from './streamForm';
class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render(){ 
        if(!this.props.stream){
            return <div>Loading...</div>
        }      return(
          <div>
              <h3>Edit a stream</h3> 
              <StreamFrom 
            //   initialValues={{ title: 'EDIT ME', description: 'CHANGE ME TOO'}} 
              initialValues={_.pick(this.props.stream, 'title', 'description')} 
              onSubmit={this.onSubmit}
              />
          </div>
      );
    } 

}
    
// ownProps  : This is actually a reference to props object which is in StreamEdit
//We can't access them in places other than StreamEdit
//So we use ownProps

const mapStateToProps = (state, ownProps) => {
   // console.log(ownProps);
    return {stream : state.streams[ownProps.match.params.id] };  //Stream that user is trying to edit
}
export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit); 