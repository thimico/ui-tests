import axios from 'axios'

const API_KEY = 'kmRFGbgiW40yqTMqW2sN3fqmdMzztPes';

export const getFetchUrl = (query) => {
  return `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`
}

export const getGifts = (url) => axios(url)