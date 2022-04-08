import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ILessons } from "../../shared/models/lessons.model";
import { selectOptions } from "../../shared/models/selectOptions.model";
import AllSchoolsSection from "./components/allSchoolsSection/allSchoolsSection";
import Charts from "./components/charts/charts";
import Selections from "./components/selections/selections";
import { getLessonsData } from "./redux/actions";

const Lessons: FC = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>();
  const [selectedCamp, setSelectedCamp] = useState<string>();
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const dispatch = useDispatch();
  const lessons = useSelector((state: ILessons) => state.lessons);
  useEffect(() => {
    dispatch(getLessonsData());
  }, []);
  const handleSchoolChange = (e: selectOptions) => {
    setSelectedSchool(e.label);
  };
  const handleCampChange = (e: selectOptions) => {
    setSelectedCamp(e.label);
  };
  const handleCountryChange = (e: selectOptions) => {
    setSelectedCountry(e.label);
  };

  return (
    <div className="lessons-wrapper">
      <Selections //@ts-ignore
        data={lessons.lessonsData}
        handleSchoolChange={handleSchoolChange}
        handleCampChange={handleCampChange}
        handleCountryChange={handleCountryChange}
      />
      <div className="row">
        <div className={selectedSchool == "All" ? "col-8" : "col-12"}>
          <Charts
            //@ts-ignore
            data={lessons.lessonsData}
            school={selectedSchool}
            camp={selectedCamp}
            country={selectedCountry}
          />
        </div>
        <div className={selectedSchool == "All" ? "col-4" : ""}>
          <AllSchoolsSection />
        </div>
      </div>
    </div>
  );
};
export default Lessons;
