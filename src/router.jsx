import { createBrowserRouter } from "react-router-dom"
import Home from './pages/home'

export const router = [
  {
    id: 0,
    path: '/',
    label: 'home',
    element: <Home />,
  }
]

export const routers = createBrowserRouter(
  router.map(router => {
    return {
      path: router.path,
      element: router.element,
    }
  })
)