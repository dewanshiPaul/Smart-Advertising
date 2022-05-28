import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL, SUBSCRIPTION_STATUS } from '../actiontype';

export const channelDetailsReducer = (
    state = {
        loading: true,
        channel: {},
        subscriptionStatus: false
    }, action) => {
    
    const{ payload,type } = action
        switch(type) {
            case CHANNEL_DETAILS_REQUEST:
                return {
                    ...state,
                    loading: true
                }

            case CHANNEL_DETAILS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    channel: payload
                }

            case CHANNEL_DETAILS_FAIL:
                return {
                    ...state,
                    loading: false,
                    channel: null,
                    error: payload
                }
            case SUBSCRIPTION_STATUS:
                return {
                    ...state,
                    subscriptionStatus: payload
                }
            
            default:
                return state
        }
}