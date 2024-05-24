import { memo } from "react";

type TInputFieldProps = {
  placeholder: string;
  type: string;
  name: string;
};

const SearchInput = memo(function SearchInput(props: TInputFieldProps) {
  return (
    <input
      className="py-3 w-full  shadow-md outline-none px-10 rounded-md"
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
    />
  );
});
export default SearchInput;
