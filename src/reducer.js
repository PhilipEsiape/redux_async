import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from "./action";
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./action.type";
const initialState ={
    loading: false,
    posts: [],
    error: ''
}

const reducer = (state = initialState, action)  =>{
      switch(action.type){
        case FETCH_POSTS_REQUEST:
            return{  
                ...state,
                loading: true
      } 
    
      case FETCH_POSTS_SUCCESS:
        return{
            loading: false,
            posts: action.playload,
            error: ''
        }
        case FETCH_POSTS_FAILURE:
            return{
                loading: false,
                posts:[],
                error: action.playload
                
            }
        default: return state
    }    
}

export default reducer;