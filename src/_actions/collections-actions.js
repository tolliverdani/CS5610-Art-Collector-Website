import * as services from "../_services/collections-service"

export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';
export const FIND_USER_COLLECTION = 'FIND_USER_COLLECTION';

export const updateCollection = async (dispatch, collection) => {
    const status = await services.updateCollection(collection);
    if ( status.status === 'OK' ){
        dispatch({
            type: UPDATE_COLLECTION,
            collection
        })
    }
}

export const findUserCollection = async (dispatch, user_id) => {
    const collection = await services.findUserCollection(user_id);
    dispatch({
        type: FIND_USER_COLLECTION,
        collection
        })
}