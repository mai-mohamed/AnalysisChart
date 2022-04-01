import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getLessonsData} from "./redux/actions";

const Lessons:FC=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getLessonsData())
    },[])
    return(
        <div className="lessons-wrapper">
            lessons
        </div>
    )
}
export default Lessons;