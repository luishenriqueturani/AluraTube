import React from "react"

export const ColorModeContext =React.createContext({
    mode: "",
    setMode: () => { alert("Ainda não") },
    toggleMode: () => { alert("Ainda não") }
})

export default function ColorModeProvider(props){

    const [mode, setMode] = React.useState(props.initialMode)

    function toggleMode(){
        if(mode === "dark"){
            setMode("light")
          }else{
            setMode("dark")
          }
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}

