import { FC } from "react";
import { useSelector } from "react-redux";
import { selectOptions } from "../../../../shared/models/selectOptions.model";

const AllSchoolsSection: FC = () => {
  const schools = useSelector(({ lessons }: any) => lessons.schoolsData);
  return (
    <div className="all-schools-wrapper">
      {schools.map((school: selectOptions, i: number) => (
        <div key={i}>{school.label}</div>
      ))}
    </div>
  );
};

export default AllSchoolsSection;
