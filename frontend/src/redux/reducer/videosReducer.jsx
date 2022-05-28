import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, CHOSEN_VIDEO_FAIL, CHOSEN_VIDEO_REQUEST, CHOSEN_VIDEO_SUCCESS, HOMESCREEN_VIDEOS_SUGGESTION_FAILS, HOMESCREEN_VIDEOS_SUGGESTION_REQUEST, HOMESCREEN_VIDEO_SUGGESTION_SUCCESS, RELATED_VIDEOS_FAIL, RELATED_VIDEOS_REQUEST, RELATED_VIDEOS_SUCCESS, SEARCH_VIDEO_FAIL, SEARCH_VIDEO_REQUEST, SEARCH_VIDEO_SUCCESS, SUBSCRIBED_CHANNEL_FAIL, SUBSCRIBED_CHANNEL_REQUEST, SUBSCRIBED_CHANNEL_SUCCESS } from "../actiontype"

export const homePageVideoReducer = (
    state={
        videos: [],
        loading: false,
        nextPageToken: null
    },
    action) => {
    const {type,payload} = action 
        switch(type) { 
            case HOMESCREEN_VIDEO_SUGGESTION_SUCCESS:
                return {
                    ...state,
                    videos: [...state.videos,...payload.videos],
                    loading: false,
                    nextPageToken: payload.nextPageToken
                }
            
            case HOMESCREEN_VIDEOS_SUGGESTION_FAILS: 
                return {
                    ...state,
                    loading: false,
                    error: payload
                }

            case HOMESCREEN_VIDEOS_SUGGESTION_REQUEST:
                return {
                    ...state,
                    loading: true
                }

            default:
                return state
        } 
}

export const chosenVideoReducer = (
    state = {
        loading: true,
        video: null
    }, action) => {
    
    const{ payload,type } = action
        switch(type) {
            case CHOSEN_VIDEO_REQUEST:
                return {
                    ...state,
                    loading: true
                }

            case CHOSEN_VIDEO_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    video: payload
                }

            case CHOSEN_VIDEO_FAIL:
                return {
                    ...state,
                    loading: false,
                    video: null,
                    error: payload
                }
            
            default:
                return state
        }
}

export const relatedVideoReducer = (
    state={
        videos: [],
        loading: true
    },
    action) => {
    const {type,payload} = action 
        switch(type) { 
            case RELATED_VIDEOS_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
            
            case RELATED_VIDEOS_SUCCESS: 
                return {
                    ...state,
                    loading: false,
                    videos: payload
                }

            case RELATED_VIDEOS_FAIL:
                return {
                    ...state,
                    loading: false
                }

            default:
                return state
        } 
}

export const searchVideoReducer = (
    state={
        videos: [],
        loading: true,
        nextPageToken: null
    },
    action) => {
    const {type,payload} = action 
        switch(type) { 
            case SEARCH_VIDEO_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
            
            case SEARCH_VIDEO_SUCCESS: 
                return {
                    ...state,
                    loading: false,
                    videos: [...state.videos,...payload.videos],
                    nextPageToken: payload.nextPageToken
                }

            case SEARCH_VIDEO_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: payload
                }

            default:
                return state
        } 
}

export const subscriptionChannelReducer = (
    state={
        videos: [],
        loading: true,
        nextPageToken: null
    },
    action) => {
    const {type,payload} = action 
        switch(type) { 
            case SUBSCRIBED_CHANNEL_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
            
            case SUBSCRIBED_CHANNEL_SUCCESS: 
                return {
                    ...state,
                    loading: false,
                    videos: [...state.videos,...payload.videos],
                    nextPageToken: payload.nextPageToken
                }

            case SUBSCRIBED_CHANNEL_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: payload
                }

            default:
                return state
        } 
}

export const videosChannelReducer = (
    state={
        videos: [],
        loading: true,
        nextPageToken: null
    },
    action) => {
    const {type,payload} = action 
        switch(type) { 
            case CHANNEL_VIDEOS_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
            
            case CHANNEL_VIDEOS_SUCCESS: 
                return {
                    ...state,
                    loading: false,
                    videos: [...state.videos,...payload.videos],
                    nextPageToken: payload.nextPageToken
                }

            case CHANNEL_VIDEOS_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: payload
                }

            default:
                return state
        } 
}