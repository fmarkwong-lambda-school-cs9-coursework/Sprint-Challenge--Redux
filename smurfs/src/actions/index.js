/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR   = 'ERROR';

export const fetchSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({type: PENDING});
    promise
      .then(response => {
        dispatch({type: SUCCESS, payload: response.data})
      })
      .catch(err => console.log(err));
  }
};

export const addSmurf = (smurf) => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    dispatch({type: PENDING});
    promise
      .then(response => {
        dispatch({type: SUCCESS, payload: response.data})
      })
      .catch(err => console.log(err));
  }
};

export const updateSmurf = (smurf) => {
  const promise = axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
  return dispatch => {
    dispatch({type: PENDING});
    promise
      .then(response => {
        dispatch(fetchSmurfs());
      })
      .catch(err => console.log(err));
  }
};

export const deleteSmurf = (id) => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${id}`)
  return dispatch => {
    dispatch({type: PENDING});
    promise
      .then(response => {
        dispatch(fetchSmurfs());
      })
      .catch(err => console.log(err));
  }
};
