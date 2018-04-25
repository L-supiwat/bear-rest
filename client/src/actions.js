import axios from 'axios';
export function fetchBear(){
    return (dispatch) => {
      axios.get('http://localhost:8000/api/bears')
      .then(result => {
        dispatch({type: 'FETCH_BEAR', payload: result.data})
      })
    }
}

export function deleteBear(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:8000/api/bears/${id}`)
        .then(() => {
            dispatch(fetchBear())
        })
    }
}

export function createBear(bear) {
    return (dispatch) => {
        axios.post(`http://localhost:8000/api/bears`, bear)
        .then(() => {
            dispatch(fetchBear())
        })
    }
}