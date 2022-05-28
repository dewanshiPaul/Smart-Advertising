import React,{ useEffect } from 'react';
import { Grid } from '@mui/material';
import { Videometadata } from '../videometadata/Videometadata';
import { Videonext } from '../videonext/videonext';
import { Comments } from '../comments/comments';
import './_watchscreen.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedVideosById, getVideoDetailsById } from '../../redux/action/videoAction';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export function Watchscreen() {
    const {id} = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoDetailsById(id));
        dispatch(getRelatedVideosById(id))
    },[dispatch,id])

    const { video,loading } = useSelector(state => state.chosenVideoReducer);
    const { videos,loading: relatedVideosByIdLoading } = useSelector(state => state.relatedVideoReducer);

    return (
        <Grid container spacing={2} channelDetailsReducer>
            <Grid item lg={8}>
                <div className="Watchscreen">
                    <iframe src={ `https://www.youtube.com/embed/${id} `} frameBorder={0} title={ video?.snippet?.title } allowFullScreen width='100%' height='100%'/>
                </div>
                { !loading ? <Videometadata video={video} videoId={id} style={{padding: '0rem 1rem'}}/>:<h6>Loading...</h6> }
                <Comments videoId={id} totalComment = {video?.statistics.commentCount} style={{padding: '0rem 1rem'}}/>
            </Grid>
            <Grid item lg={4}>
                { !relatedVideosByIdLoading ? (
                    videos?.filter(video => video.snippet)
                        .map((video) => (<Videonext video={video} key={video.id.videoId}/>))
                    ) : ( <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'> 
                        <Skeleton width="100%" height= "8rem"  count={15}/>
                    </SkeletonTheme>
                    )
                }
            </Grid>
        </Grid>
    )
}
