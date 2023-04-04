export const initMap = () => {
  let mapDiv = document.getElementById('map')
  const map = new naver.maps.Map(mapDiv, {
    center: new naver.maps.LatLng(37.511337, 127.012084),
    zoom: 13,
  });
}