import { COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, COMMENT_LIST_FAIL } from "../actiontype";

export const commentListReducer = (
    state = {
        loading: false,
        comments: [],
        nextPageToken: null
    }, 
    action) => {
    
        const{ type,payload } = action
            switch(type) {
                case COMMENT_LIST_REQUEST:
                    return {
                        ...state,
                        loading: true
                    }

                case COMMENT_LIST_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        comments: [...state.comments,...payload.comments],
                        nextPageToken: payload.nextPageToken
                    }

                case COMMENT_LIST_FAIL:
                    return {
                        ...state,
                        loading: false,
                        error: payload
                    }
                
                default:
                    return state
            }
}