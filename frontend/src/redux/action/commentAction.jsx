import { COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, COMMENT_LIST_FAIL, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL } from "../actiontype";
import request from "../../apiFromYoutbe";

export const getCommentList = id => async (dispatch,getState) => {
    try {
        dispatch({
            type: COMMENT_LIST_REQUEST,
        })

        const { data } = await request('/commentThreads', {
            params: {
                part: 'snippet',
                videoId: id,
                maxResults: 20,
                pageToken: getState().commentListReducer.nextPageToken
            }
        }) 

        dispatch({
            type: COMMENT_LIST_SUCCESS,
            payload: {
                comments: data.items,
                nextPageToken: data.nextPageToken
            }
        })
    }
    catch(error) {
        console.log(error.message);
        dispatch({
            type: COMMENT_LIST_FAIL,
            payload: error.message
        })
    }
}

export const postComment = (id,text) => async (dispatch,getState) => {
    try {
        dispatch({
            type: COMMENT_LIST_REQUEST,
        })

        const dataObj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text
                    }
                }
            }
        }

        const { data } = await request.post('/commentThreads',dataObj, {
            params: {
                part: 'snippet',
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}` 
             }
        }) 

        dispatch({
            type: POST_COMMENT_SUCCESS,
        })

        setTimeout(() => dispatch(getCommentList(id)), 1000);
        // dispatch(getCommentList(id));
    }
    catch(error) {
        console.log(error.response.data);
        dispatch({
            type: POST_COMMENT_FAIL,
            payload: error.response.data
        })
    }
}