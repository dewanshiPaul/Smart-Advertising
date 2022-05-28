import React, { useEffect } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { Content } from "../content/content";
import { useDispatch, useSelector } from "react-redux";
import { getMostWatchedVideos } from "../../redux/action/videoAction";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Skeletonframe } from '../skeletonframe/skeletonframe';


export function Homescreen() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMostWatchedVideos())
    },[dispatch])
    
    const { videos,loading } = useSelector(state => state.homePageVideoReducer)

    const fetchData = () => {
        dispatch(getMostWatchedVideos())
    }

    return (
        <Container style={{backgroundColor: 'rgb(18,20,23)'}}>
                <InfiniteScroll
                    dataLength = { videos.length }
                    next = { fetchData }
                    hasMore = { true }
                    loader = {
                        <div className="spinner-border text-danger d-block mx-auto" ></div>
                    }
                    endMessage = {
                        <p style={{ textAlign: 'center'}}>
                            <b> Yay! You have seen it all</b>
                        </p>
                    }
                className="row">
                    <Row>
                        { !loading ? (
                            videos.map((video) => (
                                <Col lg={4} md={6} >
                                    <Content video={video} />
                                </Col>
                            ))
                        ) : ( 
                            [...Array(20)].map(() => (
                                <Col lg={4} md={6}>
                                    <>
                                    <Skeletonframe/>
                                    </>
                                </Col>
                                )
                            ))
                        }
                    </Row>
                </InfiniteScroll>
        </Container>
    );
}