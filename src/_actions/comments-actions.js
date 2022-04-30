import * as service from '../_services/comments-service';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const FIND_ALL_COMMENTS = 'FIND_ALL_COMMENTS';
export const FIND_PAINTING_COMMENTS = 'FIND_PAINTING_COMMENTS';
export const FIND_ARTIST_COMMENTS = 'FIND_ARTIST_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const createComment = async (dispatch, comment) => {
    try {
        const newComment = await service.createComment(comment);

        dispatch({
            type: CREATE_COMMENT,
            newComment
        });
    } catch (e) {

    }
}

export const findAllComments = async (dispatch) => {
    try {
        const comments = await service.findAllComments();
        dispatch({
            type: FIND_ALL_COMMENTS,
            comments
        });
    } catch (e) {

    }
}

export const findPaintingComments = async (dispatch, painting_id) => {
    try {
        const comments = await service.findPaintingComments(painting_id);
        dispatch({
            type: FIND_PAINTING_COMMENTS,
            comments
        })
    } catch (e) {

    }
}

export const findArtistComments = async (dispatch, artist_id) => {
    try {
        const comments = await service.findArtistComments(artist_id);
        dispatch({
            type: FIND_PAINTING_COMMENTS,
            comments
        })
    } catch (e) {

    }
}

export const updateComment = async (dispatch, comment_id) => {
    try {
        const status = await service.updateComment(comment_id);
        if (status === "OK") {
            dispatch({
                type: UPDATE_COMMENT,
                comment_id
            });
        }
    } catch (e) {

    }
}

export const deleteComment = async (dispatch, comment_id) => {
    try {
        const response = await service.deleteComment(comment_id);
        if (response === "OK") {
            dispatch({
                type: DELETE_COMMENT,
                comment_id
            })
        }
    } catch (e) {

    }
}
