import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosFromChannel } from "../../redux/action/videoAction";
import { getChannelDetailsById, getSubscriptionStatus } from "../../redux/action/channelAction";
import { Content } from "../content/content"
import { Skeletonframe } from '../skeletonframe/skeletonframe';
import numeral from "numeral";
import './_channelscreen.scss';

export function Channelscreen() {
    const {channelId} = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosFromChannel(channelId));
        dispatch(getChannelDetailsById(channelId));
    },[dispatch,channelId])

    const fetchData = () => {
        dispatch(getVideosFromChannel(channelId));
        dispatch(getSubscriptionStatus(channelId));
    }

    const{videos,loading} = useSelector(state => state.videosChannelReducer);
    const{snippet,statistics} = useSelector(state => state.channelDetailsReducer.channel);
    const subscriptionStatus = useSelector(state => state.channelDetailsReducer.subscriptionStatus)

    return (
        <>
            <div className="px-5 py-2 my-2 d-flex justify-content-between align-item-center channelHeader">
                <div className="d-flex align-items-center">
                    <img src={snippet?.thumbnails?.default?.url} alt=''/>
                    <div className="ml-3 chanelHeader-details">
                        <h3>{snippet?.title}</h3>
                        <span>
                            {numeral(statistics?.subscriberCount).format('0.a')} subscribers
                        </span>
                    </div>
                </div>
                <button className={`${ subscriptionStatus && 'btn-gray' }`}>{ subscriptionStatus ? 'Subscribed' : 'Subscribe' }</button>
            </div>

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
                <Row className="mt-2 g-0">
                {
                    !loading ? (
                        videos?.map(video => <Col md={4} lg={3}>
                        <Content video={video} isChannelScreen />
                    </Col>)
                    ) : (
                        [...Array(15)].map(() => 
                            <Col lg={3} md={4}>
                                <Skeletonframe/>
                            </Col>
                        )
                    )
                }
                </Row>
                </InfiniteScroll>
            </div>
        </>
    )
}