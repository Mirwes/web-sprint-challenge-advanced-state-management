import React, {useEffect} from 'react';
import {fetchSmurfs} from '../actions/action'
import Smurf from './Smurf';
import {useSelector, useDispatch} from 'react-redux';



const Smurflist = props => {
    const dispatch = useDispatch()
    const smurfs = useSelector(state => state.smurfs)
    const isFetching = useSelector(state => state.isFetching)
    const error = useSelector(state => state.error)
    useEffect(() => {
dispatch(fetchSmurfs());
    }, [fetchSmurfs]);
    return (
    <div>
        {isFetching && <p>Getting Smurfs...</p>}
        {smurfs && smurfs.map((smurf) => <Smurf smurf={smurf}/>)}
        {error && <p>Error Loading ({error})</p> }
        </div>
    )
}

export default Smurflist;
