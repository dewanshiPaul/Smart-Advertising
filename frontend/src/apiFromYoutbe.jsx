import axios from 'axios';

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: process.env.REACT_APP_YT_FACE_API_KEY
    }
})

export default request