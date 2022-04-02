import { FC, useEffect, useState } from "react";
import { ILessons } from "../../../../shared/models/lessons.model";
import InputSelect from "../../../../shared/components/Select/Select";
import { selectOptions } from "../../../../shared/models/selectOptions.model";
import {getUniqueSet, strArrToObjArr} from "../../../../shared/utils/utils";

type IProps = {
  data: ILessons[];
};

const Selections: FC<IProps> = (props: IProps) => {
  const [countryOptions, setCountryOptions] = useState<selectOptions[]>([]);
  const [campOptions, setCampOptions] = useState<selectOptions[]>([]);
  const [schoolOptions, setSchoolOptions] = useState<selectOptions[]>([]);

  
  useEffect(() => {
    const countrySet: string[] = getUniqueSet(props.data, "country");
    setCountryOptions(strArrToObjArr(countrySet));

    const campSet: string[] = getUniqueSet(props.data, "camp");
    setCampOptions(strArrToObjArr(campSet));

    const schoolSet: string[] = getUniqueSet(props.data, "school");
    setSchoolOptions(strArrToObjArr(schoolSet));

  }, [props.data]);

  const handleSelectChange = () => {};
  return (
    <div>
      <InputSelect
        label="Select country"
        handleSelectChange={handleSelectChange}
        options={countryOptions}
      />
       <InputSelect
        label="Select camp"
        handleSelectChange={handleSelectChange}
        options={campOptions}
      />
       <InputSelect
        label="Select school"
        handleSelectChange={handleSelectChange}
        options={schoolOptions}
      />
    </div>
  );
};
export default Selections;
