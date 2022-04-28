import React from "react";
import {deleteComment} from "../../../_actions/comments-actions";
import {useDispatch} from "react-redux";

const PostItem = ({post}) => {

    const date = new Date(post.comment_date)
    const dispatch = useDispatch()

    const handleDeleteComment = () => {
        try {
            deleteComment(dispatch, post._id)
        } catch (e) {
            console.log("wasnt able to delete the comment")
        }
    }

    return (
        <div className={'list-group-item row border-0 m-0 p-0'}>
            <div className={`d-flex justify-content-between small p-0 m-0`}>
                <div>
                <span className={'small'}>
                        <span><strong>{post.username}</strong></span>
                        <span
                            className={'small text-muted'}>
                            - {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
                        </span>
                    </span>
                    <p>{post.comment}</p>
                </div>
                <i className={"fa fa-times"} onClick={handleDeleteComment}/>
            </div>
        </div>
    )
}

export default PostItem;