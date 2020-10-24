import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURF_START';
export const FETCH_SMURFS_SUCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURF_FAILURE';

export const POST_SMURFS_START = 'FETCH_SMURF_START';
export const POST_SMURFS_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const POST_SMURFS_FAILURE = 'FETCH_SMURF_FAILURE';

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURFS_START})
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: FETCH_SMURFS_SUCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_SMURFS_FAILURE, payload: err.res.statusText})
        })
    }
}

export const addSmurf = newSmurf => dispatch => {
    dispatch({type: POST_SMURFS_START});
    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
        dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: POST_SMURFS_FAILURE, payload: err });
    });
};
