import { createContext, useState } from "react"

export const MyCursorContext = createContext()

const CursorContextData = ({children}) => {

const [isActive, setIsActive] = useState(false)

  return (
    <MyCursorContext.Provider value={{isActive, setIsActive}}>
        {children}
    </MyCursorContext.Provider>
  )
}

export default CursorContextData