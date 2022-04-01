import {FC} from "react";
import { Provider } from "react-redux";
import Lessons from "./lessons/lessons";
import store from "../config/redux";

const App:FC=()=>{
    return(
        <Provider store={store}>
        <div>
            <Lessons/>
        </div>
        </Provider>
    )
}

export default App;