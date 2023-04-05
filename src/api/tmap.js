import axios from "axios"

export const convertGeo = async (x, y) => {
  return await axios.get('https://apis.openapi.sk.com/tmap/geo/coordconvert', {
    params: {
      version: 1,
      lat: y,
      lon: x,
      fromCoord: 'KATECH',
      toCoord: 'WGS84GEO'
    },
    headers: {
      appKey: import.meta.env.VITE_TMAP_APP_KEY
    }
  })
}