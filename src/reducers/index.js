import { combineReducers } from "redux";
//import posts from './posts'

const posts =  (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL': 
      
            return action.payload;

        case 'CREATE':
            return [...posts, action.payload]
        default:
            return posts
    }
}

export default combineReducers({posts})