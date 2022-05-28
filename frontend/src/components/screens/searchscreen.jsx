import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSearchVideos } from "../../redux/action/videoAction"
import { Videonext } from "../videonext/videonext";

export function Searchscreen() {
    const { query } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchVideos(query));
    },[dispatch,query])

    const fetchData = () => {
        dispatch(getSearchVideos(query));
    }

    const { videos,loading } = useSelector(state => state.searchVideoReducer)
    
    return (
        <div>
            <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className="spinner-border text-danger d-block mx-auto" ></div>
                    }
                    endMessage = {
                        <p style={{ textAlign: 'center'}}>
                            <b> Yay! You have seen it all</b>
                        </p>
                    }
                >
            <Container>
                { !loading ? (
                    videos?.map(video => <Videonext video={ video } key={ video.id.videoId} isSearchScreen/>)
                ) : (
                    <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'> 
                        <Skeleton width="100%" height= "10rem"  count={20}/>
                    </SkeletonTheme>
                )}
                
            </Container>
            </InfiniteScroll>
        </div>
    )
}