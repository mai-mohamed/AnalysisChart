import { ChangeEvent, FC, useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { ILessons } from "../../../../shared/models/lessons.model";
import InputSelect from "../../../../shared/components/Select/Select";
import { selectOptions } from "../../../../shared/models/selectOptions.model";
import { getUniqueSet, strArrToObjArr } from "../../../../shared/utils/utils";
import {setSchoolsData} from "../../redux/actions";


type IProps = {
  data: ILessons[];
  handleSchoolChange?: any;
  handleCampChange?: any;
  handleCountryChange?: any;
};

const Selections: FC<IProps> = (props: IProps) => {
  const dispatch=useDispatch()
  const [countryOptions, setCountryOptions] = useState<selectOptions[]>([]);
  const [campOptions, setCampOptions] = useState<selectOptions[]>([]);
  const [schoolOptions, setSchoolOptions] = useState<selectOptions[]>([]);

  useEffect(() => {
    const countrySet: string[] = getUniqueSet(props.data, "country");
    setCountryOptions(strArrToObjArr(countrySet));

    const campSet: string[] = getUniqueSet(props.data, "camp");
    setCampOptions(strArrToObjArr(campSet));

    const schoolSet: string[] = getUniqueSet(props.data, "school");
    setSchoolOptions([{label:"All",value:"All"},...strArrToObjArr(schoolSet)]);
  }, [props.data]);

  useEffect(()=>{
    dispatch(setSchoolsData(schoolOptions))
  },[schoolOptions])

  return (
    <div className="row my-5">
      <div className="col">
        <InputSelect
          label="Select country"
          handleSelectChange={(e) => props.handleCountryChange(e)}
          options={countryOptions}
        />
      </div>

      <div className="col">
        <InputSelect
          label="Select camp"
          handleSelectChange={(e) => props.handleCampChange(e)}
          options={campOptions}
        />
      </div>

      <div className="col">
        <InputSelect
          label="Select school"
          handleSelectChange={(e) => props.handleSchoolChange(e)}
          options={schoolOptions}
        />
      </div>
    </div>
  );
};
export default Selections;
