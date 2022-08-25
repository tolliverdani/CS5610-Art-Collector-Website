import React from "react";
import PostFeed from "./PostFeed";
import EmptyPosts from "../Errors/EmptyPosts";
import ComponentHeader from "../ComponentHeader";
import LogInModal from "../Auth/LoginModalButton";
import UnsecuredContent from "../../_security/unsecured-content";

const Posts = ({posts}) => {

    return (
        <div className={"mb-2"}>
            {ComponentHeader("Comments")}

            <div className={"p-2"}>
                {posts.length === 0 ?
                    EmptyPosts()
                    :
                    <>
                        <PostFeed posts={posts}/>
                        <UnsecuredContent>
                            <h6 className={"mt-2"}>Sign in to comment</h6>
                            <LogInModal text={"Sign In"}/>
                        </UnsecuredContent>
                    </>
                }
            </div>
        </div>
    )
}

export default Posts;