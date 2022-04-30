import * as service from '../_services/comments-service';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const FIND_ALL_COMMENTS = 'FIND_ALL_COMMENTS';
export const FIND_PAINTING_COMMENTS = 'FIND_PAINTING_COMMENTS';
export const FIND_ARTIST_COMMENTS = 'FIND_ARTIST_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const createComment = async (dispatch, comment) => {
    const newComment = await service.createComment(comment);
    //console.log(JSON.stringify(newComment, undefined, 4))
    dispatch({
        type: CREATE_COMMENT,
        newComment
    });
}

export const findAllComments = async (dispatch) => {
    const comments = await service.findAllComments();
    dispatch({
        type: FIND_ALL_COMMENTS,
        comments
    });
}

export const findPaintingComments = async (dispatch, painting_id) => {
    const comments = await service.findPaintingComments(painting_id);
    dispatch({
        type: FIND_PAINTING_COMMENTS,
        comments
    })
}

export const findArtistComments = async (dispatch, artist_id) => {
    const comments = await service.findArtistComments(artist_id);
    dispatch({
        type: FIND_PAINTING_COMMENTS,
        comments
    })
}

export const updateComment = async (dispatch, comment_id) => {
    const status = await service.updateComment(comment_id);
    if (status === "OK") {
        dispatch({
            type: UPDATE_COMMENT,
            comment_id
        });
    }
}

export const deleteComment = async (dispatch, comment_id) => {
    //console.log("in delete comment in actions")
    const response = await service.deleteComment(comment_id);
    if (response === "OK") {
        dispatch({
            type: DELETE_COMMENT,
            comment_id
        })
    }
}
