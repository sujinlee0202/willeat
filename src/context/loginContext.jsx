import { createContext, useEffect, useState } from "react";
import { onAuthStateChange } from "../api/firebase";

export const loginContext = createContext()

const LoginProvider = ({children}) => {
  const [user, setUser] = useState()

  useEffect(() => {
    onAuthStateChange((user) => {
      setUser(user)
    })
  }, [])

  return (
    <loginContext.Provider value={{user, setUser}}>
      {children}
    </loginContext.Provider>
  )
}

export default LoginProvider