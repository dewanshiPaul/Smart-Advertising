import { legacy_createStore  as createStore, applyMiddleware,combineReducers } from 'redux'
import { authReducer } from './reducer/authenticationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { homePageVideoReducer,chosenVideoReducer,relatedVideoReducer,searchVideoReducer,subscriptionChannelReducer,videosChannelReducer } from './reducer/videosReducer'
import { channelDetailsReducer } from './reducer/channelsReducer'
import { commentListReducer } from './reducer/commentReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    homePageVideoReducer: homePageVideoReducer,
    chosenVideoReducer: chosenVideoReducer,
    channelDetailsReducer: channelDetailsReducer,
    commentListReducer: commentListReducer,
    relatedVideoReducer: relatedVideoReducer,
    searchVideoReducer: searchVideoReducer,
    subscriptionChannelReducer:subscriptionChannelReducer,
    videosChannelReducer: videosChannelReducer
})

const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store