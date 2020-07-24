import {
  GET_GIFS,
  POST_ERROR,
} from '../actions/types';

const initialState = {
  gifs: [],
  gif: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GIFS:
      return {
        ...state,
        gifs: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
