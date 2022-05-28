import React,{ useState,useEffect } from "react";
import moment from 'moment';
import numeral from "numeral";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillEye } from 'react-icons/ai';
import { Col,Row } from 'react-bootstrap';
// import Avatar from '../header/avatar.jpg';
import request from '../../apiFromYoutbe';
import "./_videonext.scss";
import { useNavigate } from "react-router-dom";

export function Videonext({ video,isSearchScreen,subscriptionScreen }) {
    const {id,snippet:{channelId,channelTitle,description,title,publishedAt,thumbnails:{ medium },resourceId}} = video
    const isVideo = !(id.kind === 'youtube#channel'||subscriptionScreen);
    
    const[views,setViews] = useState(null);
    const[duration,setDuration] = useState(null); 
    const[channelIcon,setChannelIcon] = useState(null);

    // const _videoId = id?.videoId || id;

    useEffect(() => {
        const getContentDetails = async () => {
            const {data:{items}} = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId
                }
            })
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount)
        }
        if(isVideo) getContentDetails()
    },[id,isVideo])

    useEffect(() => {
        const getChannelIcon = async () => {
            const {data:{items}} = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        getChannelIcon()
    },[channelId])

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds*1000).format("mm:ss");
 
    const navigate = useNavigate();

    const _channelId = resourceId?.channelId || channelId;

    const handleClick = () => {
        isVideo ? navigate(`/video/${id.videoId}`): navigate(`/channel/${_channelId}`)
    }

    const isChannelThumbnail = !isVideo && 'Videonext-left-thumbnail-channel'

    return (
        <Row className="Videonext g-0 align-items-center" onClick={ handleClick }>
            <Col xs={6} md={isSearchScreen || subscriptionScreen? 4:6} className="Videonext-left" >
                <LazyLoadImage src={ medium.url } effect="blur" className={`Videonext-left-thumbnail ${isChannelThumbnail}`} wrapperClassName="Videonext-left-thumbnail-wrapper"/>
                {isVideo && 
                <span className="Videonext-left-duration">{ _duration }</span>}
            </Col>
            <Col xs={6} md={isSearchScreen || subscriptionScreen? 8:6} className="Videonext-right" style={{padding: '0%', margin: '0%', paddingLeft: '1rem'}}>
                <p className="Videonext-right-title">{ title }</p>
                {isVideo && <div className="Videonext-right-details">
                    <AiFillEye/> { numeral(views).format("0.a") } Views • 
                    { moment(publishedAt).fromNow() }
                </div>}
                {(isSearchScreen || subscriptionScreen) && <p className="mt-1 Videonext-right-description">{ description }</p>}
                <div className="Videonext-right-channel d-flex align-items-center">
                {isVideo && isSearchScreen &&
                    <LazyLoadImage src={ channelIcon?.url } effect="blur" className="Videonext-thumbnail" wrapperClassName="Videonext-thumbnail-wrapper"/>}
                    <p style={{ marginBottom: '0rem', fontSize: '14px'}}>{ channelTitle }</p>
                </div>
                { subscriptionScreen && (
                    <p className="mt-2">
                        { video.contentDetails.totalItemCount} Videos
                    </p>
                )}
            </Col>
        </Row>
    )
}