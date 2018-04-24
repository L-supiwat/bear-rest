import axios from 'axios';
export function fetchBear(){
    return (dispatch) => {
      axios.get('http://localhost:8000/api/bears')
      .then(result => {
        dispatch({type: 'FETCH_BEAR', payload: result.data})
      })
    }
  }