import { RouterProvider } from "react-router"
import { routers } from "./router"
import LoginProvider from "./context/loginContext"
import SearchPageProvider from "./context/searchPageContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LoginProvider>
          <SearchPageProvider>
            <RouterProvider router={routers} />
          </SearchPageProvider>
        </LoginProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
