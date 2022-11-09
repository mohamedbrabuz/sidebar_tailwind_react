import React, { createContext, useContext, useState } from 'react'

const stateContect = createContext()

export const ContextProvider = ({children})=>{
    const [currentColor, setcurrentColor] = useState('hover:bg-[#1E293B] hover:text-white')
    const setColor = (color)=>{
        setcurrentColor(color)
    }
    return (
        <stateContect.Provider value={{
            currentColor, setColor
        }}>
            {children}
        </stateContect.Provider>
    )
}

export const useStateContext = ()=> useContext(stateContect);