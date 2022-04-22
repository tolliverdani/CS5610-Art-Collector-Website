import React from "react";

const PostItem = ({
                            post = {
                                displayName: "displayName",
                                username: "Username",
                                date: "2022-03-31",
                                content: "Text goes here.",
                                likes: "347"
                            }
                        }) => {
    return (
        <div className={'list-group-item row border-0 mb-2 mt-2 m-0 p-0'}>
            <div className={`small p-0 m-0`}>
                <div className={'p-2'}>
                    <span className={'small'}>
                        <span><strong>{post.displayName}</strong></span>
                        <span className={'small text-muted'}> - {post.date}</span>
                    </span>
                    <p className={'m-0 p-0'}>{post.content}</p>
                </div>

                <span className={'small text-muted'}><i className={'far fa-heart ms-2'}/> {post.likes}</span>
            </div>
        </div>
    )
}

export default PostItem;