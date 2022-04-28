import React from "react";
import CreatePost from "./CreatePost";
import PostFeed from "./PostFeed";
import EmptyPosts from "../Errors/EmptyPosts";
import SecureContent from "../../_security/secure-content";
import ComponentHeader from "../ComponentHeader";
import SecureArtistContent from "../../_security/secure-artist-content";

const Posts = ({painting_data, posts, is_artist}) => {
    console.log("Post feed: " + JSON.stringify(posts))

    return (
        <div className={"mb-2"}>
            {ComponentHeader("Comments")}
            <div className={"p-2"}>
                {posts.length === 0 ?
                    EmptyPosts()
                    :
                    <PostFeed posts={posts}/>
                }
                {is_artist ?
                    <SecureArtistContent>
                        <CreatePost is_artist={is_artist} painting_data={painting_data}/>
                    </SecureArtistContent>
                    :
                    <SecureContent>
                        <CreatePost is_artist={is_artist} painting_data={painting_data}/>
                    </SecureContent>
                }
            </div>
        </div>
    )
}

export default Posts;