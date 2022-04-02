import {FC, useState} from "react";
import {  useSelector } from "react-redux";
import Lessons from "./lessons/lessons";
import DarkMode from "./darkMode/darkMode";
import "./../assets/scss/main.scss"

const App:FC=()=>{
    const [isDarkMode,setDarkMode]=useState<boolean>(false)
    const isLoading =useSelector((state:any)=>state.loader.loading)
    
    const handleDarkModeChange=()=>{
        setDarkMode(!isDarkMode)
    }
    return(    
        <div className={isDarkMode?"dark-mode":"light-mode"}>
            <div className="container">
            <DarkMode handleDarkModeChange={handleDarkModeChange} isDark={isDarkMode}/>
            <Lessons/>
            </div>
        </div>
    )
}

export default App;