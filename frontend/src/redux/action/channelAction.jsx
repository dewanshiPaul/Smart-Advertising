import request from '../../apiFromYoutbe';
import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL, SUBSCRIPTION_STATUS } from '../actiontype'; 

export const getChannelDetailsById = id => async (dispatch) => {
    try {
        dispatch({
            type: CHANNEL_DETAILS_REQUEST,
        })

        const { data } = await request('/channels', {
            params: {
                part: 'snippet,statistics,contentDetails',
                id: id,
            },
        }) 

        dispatch({
            type: CHANNEL_DETAILS_SUCCESS,
            payload: data.items[0]
        })
    }
    catch(error) {
        console.log(error.response.data);
        dispatch({
            type: CHANNEL_DETAILS_FAIL,
            payload: error.response.data
        })
    }
}

export const getSubscriptionStatus = id => async (dispatch,getState) => {
    try {

        const { data } = await request('/subscriptions', {
            params: {
                part: 'snippet',
                forChannelId: id,
                mine: true
            },
            headers: {
               Authorization: `Bearer ${getState().auth.accessToken}` 
            }
        }) 

        dispatch({
            type: SUBSCRIPTION_STATUS,
            payload: data.items.length !== 0,
        })
        console.log(data);
    }
    catch(error) {
        console.log(error.response.data);
    }
}