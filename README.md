# willeat
## 개요
운영자가 선택한 전국 맛집 지도 사이트

## 기능
- firebase를 이용한 데이터베이스 저장 및 구글 로그인 기능 구현
- admin기능 구현 -> admin만 firebase에 데이터 추가 가능
- cloudinary를 이용한 이미지 저장
- 네이버 검색 api를 이용해 장소 검색 (운영자가 장소를 추가할 때 사용)
- 현재위치를 기반으로 네이버 지도 api를 이용해 지도 표시
- 거리 검색 기능으로 내 주변에서 N만큼 떨어진 장소까지 검색 가능
- 사이드바에 현재 위치 기준의 맛집 리스트 표시
- 맛집 카드 클릭 시 맛집 위치 표시

## 사용 기술
- Naver Open API (Map, Search)
- Tmap Open API (Convert Coord)
- firebase, cloudinary
- HTML, JavaScript
- React, PostCSS, React Router, React Query, Axios
- React-icons, uuid, react-custom-scrollbars-2

## 실행 방법
```
npm install
npm run dev
```

## 파일 구조
```
├─ public  
├─ src   
│  ├─ api   
│  │  ├─ cloudinary.js   
│  │  ├─ fetchNaverMap.js   
│  │  ├─ fetchNaverPlace.js   
│  │  ├─ firebase.js  
│  │  └─ tmap.js  
│  ├─ components  
│  │  ├─ EditModal   
│  │  ├─ Login  
│  │  ├─ PlaceCard
│  │  └─ Sidebar  
│  ├─ context  
│  │  ├─ searchPageContext.jsx
│  │  └─ loginContext.jsx  
│  ├─ pages
│  │  ├─ searchplace
│  │  ├─ main
│  │  └─ home
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ router.jsx
├─ index.html
├─ README.md
├─ vite.config.js
```
## 세부사항
### src/api
- cloudinary.js : cloudinary api
- fetchNaverMap.js : naver map api
- fetchNaverPlace.js : naver search api
- firebase.js : firebase api
- tmap.js : tmap api

### src/components
- EditModal : 맛집 추가 모달
- Login : Google Login / Logout 기능
- SideBar : 내 주변 맛집들이 표시되는 컴포넌트
- PlaceCard : 사이드바에 표시되는 맛집 카드

### src/context
- loginContext : login 상태를 앱 전반에 사용하기 위한 context
- loginContext : search page on/off 를 위한 context

### src/pages
- home : 메인 페이지
- main : 메인 페이지 홈 화면의 지도
- searchplace : place card 선택 시 나오는 해당 place 지도 페이지

### src/router.jsx
라우터 작성

