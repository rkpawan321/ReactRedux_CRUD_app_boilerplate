import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../src/reducers/authReducer';
import blogReducer from '../src/reducers/blogReducer';

export default combineReducers({
   auth: authReducer,
   form: formReducer,
   blogs: blogReducer,
});