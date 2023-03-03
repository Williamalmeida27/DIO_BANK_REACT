import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/localStorage";

interface IAppContext {
    user: string,
    setUser: (user: string) => void,
    password: string,
    setPassword: (password: string) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    name: string,
    setName: (name: string) => void;
  }
  
  export const AppContext = createContext({} as IAppContext)
  
  export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const storage = getAllLocalStorage();

    useEffect(() => {
      if(storage){
        const {login} = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [])
    
  
    return (
      <AppContext.Provider value = {{ user, setUser, password, setPassword, isLoggedIn, setIsLoggedIn, name, setName}}>
        {children}
      </AppContext.Provider>
    )
  }
  
  //console.log(AppContext)
  