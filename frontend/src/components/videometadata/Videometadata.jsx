import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import numeral from "numeral";
import Showtext from "react-show-more-text";
import { MdThumbUp,MdThumbDown } from "react-icons/md";
import './_Videometadata.scss'
import { getChannelDetailsById,getSubscriptionStatus } from "../../redux/action/channelAction";
//details of video playing currently
//name, description, channel, like count
export function Videometadata({video:{snippet,statistics}, videoId}) {
    const { channelId, channelTitle, description, title, publishedAt } = snippet;
    const { viewCount, likeCount, dislikeCount } = statistics;
    
    const dispatch = useDispatch();

    const { snippet:channelSnippet,statistics: channelStatistics } = useSelector(state => state.channelDetailsReducer.channel)

    const subscriptionStatus = useSelector(state => state.channelDetailsReducer.subscriptionStatus)

    useEffect(() => {
        dispatch(getChannelDetailsById(channelId));
        dispatch(getSubscriptionStatus(channelId));
    },[dispatch,channelId])

    return (
        <div className="Videometadata py-2">
                <div className="Videometadata-top">
                    <h4>{ title }</h4>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>
                            {numeral(viewCount).format('0.a')} Views • {moment(publishedAt).fromNow()}
                        </span>
                    <div className="Videometadata-top-count">
                        <span>
                            <MdThumbUp size={26}/> 
                            {numeral(likeCount).format('0.a')}
                        </span>
                        <span>
                            <MdThumbDown size={26}/>
                            {numeral(dislikeCount).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            <div className="Videometadata-channel">
                <div className="d-flex">
                    <img src = { channelSnippet?.thumbnails?.default?.url } alt = '' />
                    <div className="d-flex flex-column" style={{marginTop: '0.5rem'}}>
                        <span>{ channelTitle }</span>
                        <span> {numeral( channelStatistics?.subscriberCount ).format('0.a')} Subscribers</span>
                    </div>
                </div>
                <button className={`${ subscriptionStatus && 'btn-gray' }`}>{ subscriptionStatus ? 'Subscribed' : 'Subscribe' }</button>
            </div>
            <div className="Videometadata-description">
                <Showtext lines={3} more="SHOW MORE" less="SHOW LESS" anchorClass="showMoreText" expanded={false}>
                { description }
                </Showtext>
            </div>
        </div>
    );
}