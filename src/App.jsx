import Togile from './Components/Togile/Togile'
import Search from './Components/Search/Search'
import Searchresult from './Components/Searchresult/Searchresult'
import './App.css'
import { useContext } from "react"

import { createContext, useState } from 'react'

 export const ThemeContext=createContext(null) 
function App() {
  
  const[theme,settheme]=useState("light")
  const passedValues=useContext(ThemeContext)
    return (
   
    
    <ThemeContext.Provider value={{theme,settheme}}>
       <div id='main' className={theme+"header"}>
    <Togile></Togile>
    <Search></Search>
    <Searchresult></Searchresult>
    </div>
    </ThemeContext.Provider>  
    
  )
}

export default App
