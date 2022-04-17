import { getURLParams } from "../../shared/utils/utils";

const LessonDetails = () => {
  return (
    <div>
      <p>School: {getURLParams("school")}</p>
      <p>Camp: {getURLParams("camp")}</p>
      <p>Country: {getURLParams("country")}</p>
    </div>
  );
};
export default LessonDetails;
