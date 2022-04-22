import React from "react";
import CreatePost from "./CreatePost";
import PostFeed from "./PostFeed";
import EmptyPosts from "../Errors/EmptyPosts";

const Posts = (params) => {

    return (
        <div className={"p-2 border-bottom"}>
            <CreatePost/>
            {params.posts.length === 0 ?
                EmptyPosts()
                :
                <PostFeed posts={params.posts}/>}
        </div>
    )
}

export default Posts;