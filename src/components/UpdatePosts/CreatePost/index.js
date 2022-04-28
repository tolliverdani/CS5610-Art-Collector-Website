import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {useProfile} from "../../../_context/profile-context";
import {createComment} from "../../../_actions/comments-actions";

const CreatePost = ({is_artist, painting_data}) => {

    const {profile} = useProfile();
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState({post: ""});

    const handleCreateComment = () => {
        let comment_to_add = {}
        if ( is_artist ) {
            comment_to_add = {
                user_id: profile._id,
                username: profile.username,
                artist_id: profile.artistId,
                comment_date: new Date(),
                type: "artist",
                comment: newComment
            }
        } else {
            comment_to_add = {
                user_id: profile._id,
                username: profile.username,
                painting_id: painting_data.id,
                artist_id: "",
                comment_date: new Date(),
                type: "painting",
                comment: newComment
            }
        }
        console.log("About to create a comment: ")
        console.log(JSON.stringify(comment_to_add, undefined, 4))
        createComment(dispatch, comment_to_add)
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <textarea className="form-control border-0 bg-light text-muted"
                              rows="2"
                              placeholder={"Leave a comment"}
                              onChange={(e) => (setNewComment(e.target.value))}/>
                    <div className={'mt-2 p-0'}>
                        <button className={"btn-sm btn-primary rounded-pill float-end"}
                                type={"button"}
                                onClick={handleCreateComment}>
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CreatePost;