import React,{ useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import { Container } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { getSubscriptionChannel } from "../../redux/action/videoAction";
import { Videonext } from "../videonext/videonext";
//subscription page template
// data from youtube api
export function Subscriptionscreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubscriptionChannel());
    },[dispatch])

    const {loading,videos} = useSelector(state => state.subscriptionChannelReducer);
    
    return (
        <div>
                <Container fluid> 
                        { 
                            !loading ? ( 
                                videos?.map(video => <Videonext video={video} key={video.id} subscriptionScreen/>)
                                ) : (
                                    <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'> 
                                        <Skeleton width="100%" height= "10rem"  count={20}/>
                                    </SkeletonTheme>
                                )
                        }
                </Container>
        </div>
    )
}