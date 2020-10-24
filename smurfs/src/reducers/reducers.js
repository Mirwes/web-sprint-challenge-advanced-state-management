import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE} from '../actions/action';

const initialState = {
    smurfs: [

    ],
    isFetching: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SMURFS_START:
            return {smurfs:[], isFetching: true, error: ''}
            case FETCH_SMURFS_SUCCESS:
                return {smurfs: action.payload, isFetching: false, error: '' }
            case FETCH_SMURFS_FAILURE:
                return {smurfs:[], isFetching: false, error: action.payload }

                case POST_SMURFS_SUCCESS:
                    const newSmurf = {
                        name: action.payload,
                        location: "",
                        id: Date.now()
                    };
                    return { ...state, smurfs: [...state.smurfs, newSmurf] };
                    case POST_SMURFS_FAILURE:
                        return {
                            ...state,
                            addingSmurf: false,
                            error: action.payload,
                            isFetching: false
                        };
                        default: 
                        return state
    }
}