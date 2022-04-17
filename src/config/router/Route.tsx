import { Routes, Route } from "react-router-dom"
import App from "../../modules/App"
import LessonDetails from "../../modules/lessonDetails/lessonDetails"

function RouterComponent() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="/details" element={ <LessonDetails/> } />
      </Routes>
    </div>
  )
}

export default RouterComponent