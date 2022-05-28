import React from "react";
import moment from "moment";
import './_comment.scss'
//template for each comment
export function Comment({ comment }) {
    const { authorDisplayName,authorProfileImageUrl,publishedAt,textOriginal } = comment;

    return (
        <div className="comment">
             <img src={ authorProfileImageUrl } alt=""/>
            <div className="comment-body">
                <p className="comment-body-header">
                    { authorDisplayName } • { moment(publishedAt).fromNow() }
                </p>
                <p className="comment-body-section">{ textOriginal }</p>
            </div>
        </div>
    )
}