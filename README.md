# willeat
## 개요
운영자가 선택한 전국 맛집 지도 사이트
## 사용 기술
- Naver Open API
- Tmap Open API
- HTML, JavaScript
- React, PostCSS, React Router, React Query, Axios
- React-icons, uuid
## 실행 방법
```
npm run start
```
## 파일 구조
```
├─ public  
├─ src   
│  ├─ api   
│  │  │─ cloudinary.js   
│  │  │─ fetchNaverMap.js   
│  │  │─ fetchNaverPlace.js   
│  │  │─ firebase.js  
│  │  └─ tmap.js  
│  ├─ components  
│  │  └─ EditModal   
│  │  └─ Login  
│  │  └─ Sidebar  
│  ├─ context  
│  │  └─ loginContext.jsx  
│  ├─ pages
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
### src/context
- loginContext : login 상태를 앱 전반에 사용하기 위한 context
### src/pages
- home : 메인 페이지
### src/router.jsx
라우터 작성

