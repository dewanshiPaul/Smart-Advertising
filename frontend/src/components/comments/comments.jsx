import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comment } from '../comment/comment';
import { getCommentList, postComment } from '../../redux/action/commentAction';
import InfiniteScroll from 'react-infinite-scroll-component';
// import Avatar from '../header/avatar.jpg';
import './_comments.scss';

export function Comments({ videoId,totalComment }) {
    const dispatch = useDispatch();

    const[text,setText] = useState('');

    useEffect(() => {
        dispatch(getCommentList(videoId))
    },[videoId, dispatch])

    const comments = useSelector(state => state.commentListReducer.comments);

    const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet);
    console.log(_comments);

    const fetchData = () => {
        dispatch(getCommentList(videoId))
    }

    const handleInput = (e) => {
        setText(e.target.value);
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if(text.length === 0) return 

        dispatch(postComment(videoId,text));
        setText('');
    }

    const user = useSelector(state => state.auth.user);

    return (
        <div className='Comments'>
            <p>{ totalComment } comments</p>
            <div className='Comments-format'>
                <img src={ user.displayPic } alt=""/>
                <form onSubmit={handleCommentSubmit}>
                    <input type="text" placeholder='Write comment..' value={text} onChange={handleInput}/>
                    <button>Comment</button>
                </form>
            </div>
            <InfiniteScroll
                dataLength={ _comments.length }
                next={ fetchData }
                hasMore={ true }
                loader={
                    <div className="spinner-border text-danger d-block mx-auto" ></div>
                }
                endMessage={
                    <p className='d-flex align-items-center justify-content-center' style={{ textAlign: 'center'}}>It is fully loaded!</p>
                }
            >
            <div className="Comments-list">
                {
                    _comments?.map((comment,i) => (
                        <Comment comment={comment} key={i}/>
                    ))
                }
            </div>
            </InfiniteScroll>
        </div>
    );
}