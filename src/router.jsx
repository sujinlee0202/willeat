import { createBrowserRouter } from "react-router-dom"
import Home from './pages/home'
import SearchPlace from './pages/searchplace'
import MainMap from "./pages/main"

export const router = [
  {
    id: 0,
    path: '/',
    label: 'home',
    element: <Home />,
    children: [
      {
        id: 0,
        path: '/',
        label: 'main_map',
        element: <MainMap />,
      },
      {
        id: 1,
        path: '/search/:id',
        label: 'search_place',
        element: <SearchPlace />,
      }
    ]
  },
]

export const routers = createBrowserRouter(
  router.map(router => {  
    return {
      path: router.path,
      element: router.element,
      children: router.children
    }
  })
)