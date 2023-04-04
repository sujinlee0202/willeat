import { RouterProvider } from "react-router"
import { routers } from "./router"
import LoginProvider from "./context/loginContext"

function App() {
  return (
    <>
      <LoginProvider>
        <RouterProvider router={routers} />
      </LoginProvider>
    </>
  )
}

export default App
