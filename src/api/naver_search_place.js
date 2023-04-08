import axios from "axios"

export const searchNaver = async (query) => {
  return await axios.get('/v1/search/local', {
    params: {
      query: query,
      display: 5,
      start: 1,
      sort: 'random'
    },
    headers: {
      "X-Naver-Client-Id": import.meta.env.VITE_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_SECRET_ID,
    },
  })
}