import React, { useState } from "react"

const defaultState = { defaultDisplay: true, toggleDefaultDisplay: () => {}}
  
export const DisplayContext = React.createContext(defaultState);

const DisplayContextProvider = ({children}) => {

    const [ defaultDisplay, setDefaultDisplay ] = useState(true)

    const toggleDefaultDisplay = () => setDefaultDisplay(!defaultDisplay)

    return (
        <DisplayContext.Provider value={{ defaultDisplay, toggleDefaultDisplay }}>
            {children}
        </DisplayContext.Provider>
    )
}

export default DisplayContextProvider
