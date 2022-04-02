import { ChangeEvent, FC } from "react";
import Select from "react-select";
import {selectOptions} from "../../models/selectOptions.model";
type IProps = {
  options: selectOptions[];
  label?: string;
  errorMsg?: string;
  placeholder?: string;
  asterick?: boolean;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>|any) => void;
};

const InputSelect: FC<IProps> = (props: IProps) => {
  return (
    <>
      <label>
        {props.label} {props.asterick && <span>*</span>}
      </label>
      <Select
        options={props.options}
        placeholder={props.placeholder}
        onChange={(e)=>props.handleSelectChange(e)}
      />
      {props.errorMsg && (
        <small>{props.errorMsg}</small>
      )}
    </>
  );
};
export default InputSelect;
