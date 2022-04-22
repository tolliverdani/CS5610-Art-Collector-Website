import * as service from '../_services/comments-service';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const FIND_ALL_COMMENTS = 'FIND_ALL_COMMENTS';
export const FIND_PAINTING_COMMENTS = 'FIND_PAINTING_COMMENTS';
export const FIND_ARTIST_COMMENTS = 'FIND_ARTIST_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const createComment = async (dispatch, tuit) => {
    const newComment = await service.createComment(tuit);
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


export const updateComment = async (dispatch, tuit) => {
    const status = await service.updateComment(tuit);
    if (status === "OK") {
        dispatch({type: UPDATE_COMMENT, tuit});
    }
}

export const deleteComment = async (dispatch, tuit) => {
    const response = await service.deleteComment(tuit);
    if (response === "OK") {
        dispatch({type: DELETE_COMMENT, tuit})
    }
}
