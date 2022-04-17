import { ChangeEvent, FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectOptions } from "../../../../shared/models/selectOptions.model";

const AllSchoolsSection = ({ handleCheckBoxChange }: any) => {
  const schools = useSelector(({ lessons }: any) => lessons.schoolsData);
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    school: any
  ) => {
    if (e.target.checked) {
      setSelectedSchools([...selectedSchools, school.label]);
      handleCheckBoxChange([...selectedSchools, school.label]);
    } else {
      const filteredArr = selectedSchools.filter(
        (item) => item !== school.label
      );
      setSelectedSchools(filteredArr);
      handleCheckBoxChange(filteredArr);
    }
  };
  return (
    <div className="all-schools-wrapper">
      {schools.map((school: selectOptions, i: number) => (
        <div key={i}>
          <input
            type={"checkbox"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleCheckboxChange(e, school)
            }
          />
          <label htmlFor={school.label}>{school.label}</label>
        </div>
      ))}
    </div>
  );
};

export default AllSchoolsSection;
