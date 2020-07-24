import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
// Get Gifs
export const fetchGifs = () => async dispatch => {
    try {
        const res = await api.get('/posts');

        dispatch({
            type: GET_GIFS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
