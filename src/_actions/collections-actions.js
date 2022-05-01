import * as services from "../_services/collections-service"

export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';
export const FIND_USER_COLLECTION = 'FIND_USER_COLLECTION';
export const ADD_TO_USER_COLLECTION = 'ADD_TO_USER_COLLECTION';
export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';

export const updateCollection = async (dispatch, collection) => {
    try {
        const status = await services.updateCollection(collection);
        if (status.status === 'OK') {
            dispatch({
                type: UPDATE_COLLECTION,
                collection
            })
        }
    } catch (e) {

    }
}

export const findUserCollection = async (dispatch, user_id) => {
    try {
        const collection = await services.findUserCollection(user_id);
        dispatch({
            type: FIND_USER_COLLECTION,
            collection
        })
    } catch (e) {

    }
}

export const addToUserCollection = async (dispatch, user_id, item_id) => {
    try {
        const added_item = await services.addToUserCollection(user_id, item_id);
        if (added_item) {
            dispatch({
                type: ADD_TO_USER_COLLECTION,
                added_item
            })
        }
    } catch (e) {

    }
}

export const removeFromUserCollection = async (dispatch, user_id, item_id) => {
    try {
        const status = await services.removeFromUserCollection(user_id, item_id);
        if ( status === 200 ) {
            dispatch({
                type: REMOVE_FROM_COLLECTION,
                item_id
            })
        }
    } catch (e) {

    }
}