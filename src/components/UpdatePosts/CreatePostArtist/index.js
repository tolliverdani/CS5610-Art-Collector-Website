import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {createComment} from "../../../_actions/comments-actions";

const CreatePostArtist = ({profile, artist_id}) => {
    const dispatch = useDispatch();

    const [newComment, setNewComment] = useState({post: ""});

    const handleCreateComment = () => {
        let comment_to_add = {}
        comment_to_add = {
            user_id: profile._id,
            username: profile.username,
            painting_id: "",
            artist_id: artist_id,
            comment_date: new Date(),
            type: "artist",
            comment: newComment
        }
        console.log(JSON.stringify(comment_to_add, undefined,4))
        createComment(dispatch, comment_to_add)
    }

    return (
        <div>
            {profile && profile.hasOwnProperty("is_artist") && (profile.is_artist === true || profile.is_artist === "true") ?
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
                :
                <></>
            }
        </div>
    );
}
export default CreatePostArtist;