import { convertGeo } from "./tmap";

const INITIAL_X = 37.511337
const INITIAL_Y = 127.012084

export const initMap = (lat, lon) => {
  let mapDiv = document.getElementById('map')
  const map = new naver.maps.Map(mapDiv, {
    center: new naver.maps.LatLng(lat, lon),
    zoom: 16,
  });
}

export const searchMap = async (x, y) => {
  let convertX = 0
  let convertY = 0

  await convertGeo(x, y)
  .then(res => Object.values(res.data)[0])
  .then(coord => {
    convertX = coord.lat
    convertY = coord.lon
    return convertX, convertY
  })

  let mapDiv = document.getElementById('searchMap')
  const map = new naver.maps.Map(mapDiv, {
    center: new naver.maps.LatLng(convertX, convertY),
    zoom: 19,
  });
  const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(convertX, convertY),
    map: map
  })
}