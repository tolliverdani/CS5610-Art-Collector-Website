import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {useProfile} from "../../../_context/profile-context";
import {createComment} from "../../../_actions/comments-actions";

const CreatePost = () => {

    const profile = useProfile();
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState({post: ""});

    return (
        <div>
            <form>
                <div className="form-group">
                    <textarea className="form-control border-0 bg-light text-muted"
                              rows="2"
                              placeholder={"Leave a comment"}
                              onChange={(event) =>
                                  setNewComment({
                                      ...newComment,
                                      user_id: profile._id,
                                      username: profile.username,
                                      post: event.target.value})}/>
                    <div className={'mt-2 p-0'}>
                        <button className={"btn-sm btn-primary rounded-pill float-end"}
                                onClick={() => createComment(dispatch, newComment)}>
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CreatePost;