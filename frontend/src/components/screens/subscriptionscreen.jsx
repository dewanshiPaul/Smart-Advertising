import React,{ useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import { Container } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { getSubscriptionChannel } from "../../redux/action/videoAction";
import { Videonext } from "../videonext/videonext";
import InfiniteScroll from "react-infinite-scroll-component";

export function Subscriptionscreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubscriptionChannel());
    },[dispatch])

    const {loading,videos} = useSelector(state => state.subscriptionChannelReducer);

    const fetchData = () => {
        dispatch(getSubscriptionChannel());
    }
    return (
        <div>
                <Container fluid> 
                    {/* <InfiniteScroll
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
                    }> */}
                        { 
                            !loading ? ( 
                                videos?.map(video => <Videonext video={video} key={video.id} subscriptionScreen/>)
                                ) : (
                                    <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'> 
                                        <Skeleton width="100%" height= "10rem"  count={20}/>
                                    </SkeletonTheme>
                                )
                        }
                    {/* </InfiniteScroll> */}
                </Container>
        </div>
    )
}