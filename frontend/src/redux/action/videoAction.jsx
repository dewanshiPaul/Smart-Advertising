import { HOMESCREEN_VIDEOS_SUGGESTION_FAILS, HOMESCREEN_VIDEOS_SUGGESTION_REQUEST, HOMESCREEN_VIDEO_SUGGESTION_SUCCESS,CHOSEN_VIDEO_REQUEST, CHOSEN_VIDEO_SUCCESS, CHOSEN_VIDEO_FAIL, RELATED_VIDEOS_SUCCESS, RELATED_VIDEOS_REQUEST, RELATED_VIDEOS_FAIL, SEARCH_VIDEO_REQUEST, SEARCH_VIDEO_SUCCESS, SEARCH_VIDEO_FAIL, SUBSCRIBED_CHANNEL_REQUEST, SUBSCRIBED_CHANNEL_SUCCESS, SUBSCRIBED_CHANNEL_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, CHANNEL_VIDEOS_FAIL } from "../actiontype"
import request from "../../apiFromYoutbe"

export const getMostWatchedVideos = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: HOMESCREEN_VIDEOS_SUGGESTION_REQUEST
        })
        const { data } = await request("/videos",{
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "IN",
                maxResults: 20,
                pageToken: getState().homePageVideoReducer.nextPageToken
            }
        })
       
        dispatch({
            type: HOMESCREEN_VIDEO_SUGGESTION_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken
            }
        })
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: HOMESCREEN_VIDEOS_SUGGESTION_FAILS,
            payload: error.message
        })
    }
}

export const getVideoDetailsById = id => async (dispatch) => {
    try {
        dispatch({
            type: CHOSEN_VIDEO_REQUEST
        })

        const { data } = await request('/videos', {
            params: {
                part: 'snippet,statistics',
                id: id,
            },
        }) 

        dispatch({
            type: CHOSEN_VIDEO_SUCCESS,
            payload: data.items[0]
        })
    }
    catch(error) {
        console.log(error.message);
        dispatch({
            type: CHOSEN_VIDEO_FAIL,
            payload: error.message
        })
    }
}

export const getRelatedVideosById = id => async (dispatch) => {
    try {
        dispatch({
            type: RELATED_VIDEOS_REQUEST
        })

        const { data } = await request('/search', {
            params: {
                part: 'snippet',
                relatedToVideoId: id,
                maxResults: 15,
                type: 'video'
            },
        }) 

        dispatch({
            type: RELATED_VIDEOS_SUCCESS,
            payload: data.items
        })
    }
    catch(error) {
        console.log(error.response.data.message);
        dispatch({
            type: RELATED_VIDEOS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSearchVideos = keyword => async (dispatch,getState) => {
    try {
        dispatch({
            type: SEARCH_VIDEO_REQUEST,
        })
        const { data } = await request('/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                pageToken: getState().searchVideoReducer.nextPageToken,
                q: keyword,
                type: 'video,channel',
            }
        })
        dispatch({
            type: SEARCH_VIDEO_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken
            }
        })
    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: SEARCH_VIDEO_FAIL,
            payload: error.message
        })
    }
}

export const getSubscriptionChannel = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: SUBSCRIBED_CHANNEL_REQUEST,
        })
        const { data } = await request('/subscriptions', {
            params: {
                part: 'snippet,contentDetails',
                mine: true,
                maxResults: 100,
                pageToken: getState().searchVideoReducer.nextPageToken,
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}` 
             }
        })
        dispatch({
            type: SUBSCRIBED_CHANNEL_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken
            }
        })
    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: SUBSCRIBED_CHANNEL_FAIL,
            payload: error.message
        })
    }
}

export const getVideosFromChannel = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: CHANNEL_VIDEOS_REQUEST,
        })
        const { data:{items} } = await request('/channels', {
            params: {
                part: 'contentDetails',
                id: id
            },
        })

        const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;

        dispatch({
            type: CHANNEL_VIDEOS_REQUEST,
        })
        const { data } = await request('/playlistItems', {
            params: {
                part: 'snippet,contentDetails',
                playlistId: uploadPlaylistId,
                maxResults: 30,
                pageToken: getState().videosChannelReducer.nextPageToken
            },
        })

        dispatch({
            type: CHANNEL_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken
            }
        })
    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: CHANNEL_VIDEOS_FAIL,
            payload: error.message
        })
    }
}