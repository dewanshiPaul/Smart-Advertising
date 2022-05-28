import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actiontype';

const initialStateUser = {
    accessToken: sessionStorage.getItem("yt-face-access-token") ? sessionStorage.getItem('yt-face-access-token'):null,
    user: sessionStorage.getItem("yt-face-user") ? JSON.parse(sessionStorage.getItem("yt-face-user")):null,
    loading: false
}

export const authReducer = (prevstate = initialStateUser,action) => {
    const {type,payload} = action

    switch(type) {
        case LOGIN_REQUEST:
            return {
                ...prevstate,
                loading: true
            }
        
        case LOGIN_SUCCESS: 
            return {
                ...prevstate,
                accessToken: payload,
                loading: false
            }

        case LOGIN_FAIL:
            return {
                ...prevstate,
                accessToken: null,
                loading: false,
                error: payload
            }

        case LOAD_PROFILE:
            return {
                ...prevstate,
                user: payload
            }

        case LOG_OUT:
            return {
                ...prevstate,
                accessToken: null,
                user: null
            }

        default:
            return prevstate
    }
}