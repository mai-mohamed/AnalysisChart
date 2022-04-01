import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ILessons} from "../../shared/models/lessons.model";
import {getLessonsData} from "./redux/actions";

const Lessons:FC=()=>{
    const dispatch=useDispatch();
    const lessons =useSelector((state:ILessons)=>state.lessons)
    console.log(lessons)
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