import _ from 'lodash';
import {
    FETCH_BLOG,
    FETCH_BLOGS,
    CREATE_BLOG,
    EDIT_BLOG,
    DELETE_BLOG
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_BLOGS:
            return { ...state, ..._.mapKeys(action.payload, 'id')}   //we take the list of streams from api and then 
            // we create object out of it using mapKeys lodash  (Array ====> Object )
            //keys  inside object are going to be ids of individual streams itself
        case FETCH_BLOG:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_BLOG:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_BLOG:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_BLOG:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};