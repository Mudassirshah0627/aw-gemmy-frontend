import { Field } from "formik";
import { memo } from "react";
type TInputFieldProps = {
  placeholder: string;
  type: string;
  name: string;
};
const InputField = memo(function InputField(props: TInputFieldProps) {
  return (
    <Field
      className="py-3 w-full  shadow-md outline-none px-4"
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
    />
  );
});
export default InputField;
