import {FC, useState} from "react";
import { Provider } from "react-redux";
import Lessons from "./lessons/lessons";
import store from "../config/redux";
import DarkMode from "./darkMode/darkMode";
import "./../assets/scss/main.scss"

const App:FC=()=>{
    const [isDarkMode,setDarkMode]=useState<boolean>(false)
    const handleDarkModeChange=()=>{
        setDarkMode(!isDarkMode)
    }
    return(
        <Provider store={store}>
        <div className={isDarkMode?"dark-mode":"light-mode"}>
            <DarkMode handleDarkModeChange={handleDarkModeChange}/>
            <Lessons/>
        </div>
        </Provider>
    )
}

export default App;