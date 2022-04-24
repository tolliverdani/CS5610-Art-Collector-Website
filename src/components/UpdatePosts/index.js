import React from "react";
import CreatePost from "./CreatePost";
import PostFeed from "./PostFeed";
import EmptyPosts from "../Errors/EmptyPosts";
import SecureContent from "../../_security/secure-content";
import ComponentHeader from "../ComponentHeader";

const Posts = (params) => {

    return (
        <>
            {ComponentHeader("Comments")}
            <div className={"p-2 border-bottom"}>
                {params.posts.length === 0 ?
                    EmptyPosts()
                    :
                    <PostFeed posts={params.posts}/>
                }
                <SecureContent>
                    <CreatePost/>
                </SecureContent>
            </div>
        </>
    )
}

export default Posts;