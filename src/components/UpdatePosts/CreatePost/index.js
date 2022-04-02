import React, {useState} from "react"
import ComponentHeader from "../../ComponentHeader";

const CreatePost = () => {

    return (
        <>
            {ComponentHeader("Comments")}
            <form>
                <div className="form-group">
                    <textarea className="form-control border-0 bg-light text-muted"
                              rows="2"
                              placeholder={"What's happening?"}/>
                    <div className={'mt-2 m-0 p-0'}>
                        <button className={"rounded-pill btn-sm btn-primary"}>Post</button>
                    </div>
                </div>
            </form>
        </>
    );
}
export default CreatePost;