import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';
import './_content.scss';
import { AiFillEye } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import request from "../../apiFromYoutbe";

export function Content({ video,isChannelScreen }) {
    //video with thumbnail design
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: {medium}
        },
        contentDetails
    } = video

    const[views,setViews] = useState(null);
    const[duration,setDuration] = useState(null); 
    const[channelIcon,setChannelIcon] = useState(null);
    const navigate = useNavigate();

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds*1000).format("mm:ss")

    const _videoId = id?.videoId || contentDetails?.videoId|| id;

    const handleVideoClick = () => {
        navigate(`/video/${_videoId}`)
    }

    useEffect(() => {
        const getContentDetails = async () => {
            const {data:{items}} = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId
                }
            })
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount)
        }
        getContentDetails()
    },[_videoId])

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

    return (
        <div className="content" onClick={ handleVideoClick }>
            <div className="content-top">
                <LazyLoadImage src={ medium.url } effect="blur" />
                <span className="content-top-duration">{ _duration }</span>
            </div>
            <div className="content-title">
                { title }
            </div>
            <div className="content-detail">
                <span className="content-detail-views"><AiFillEye/> { numeral(views).format("0.a") } Views • </span>
                <span>{ moment(publishedAt).fromNow() }</span>
            </div>
            <div className="content-channel">
                { !isChannelScreen &&
                <LazyLoadImage src={ channelIcon?.url } effect="blur"/>}
                <p>{ channelTitle }</p>
            </div>
        </div>
    );
}