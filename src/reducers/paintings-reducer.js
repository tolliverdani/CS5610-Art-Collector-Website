import {FIND_PAINTINGS_BY_ARTIST} from "../actions/artpieces-actions";

const paintingsReducer = ( state = [], action ) => {
    switch ( action.type ){
        case FIND_PAINTINGS_BY_ARTIST:
            return action.all_paintings_by_artist;
        default:
            return [];
    }
}

export default paintingsReducer;