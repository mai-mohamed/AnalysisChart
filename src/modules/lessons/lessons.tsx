import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ILessons} from "../../shared/models/lessons.model";
import Charts from "./components/charts/charts";
import {getLessonsData} from "./redux/actions";

const Lessons:FC=()=>{
    const dispatch=useDispatch();
    const lessons =useSelector((state:ILessons)=>state.lessons)
    useEffect(()=>{
        dispatch(getLessonsData())
    },[])
    return(
        <div className="lessons-wrapper">
           
            <Charts 
             //@ts-ignore 
            data={lessons.lessonsData}/>
        </div>
    )
}
export default Lessons;