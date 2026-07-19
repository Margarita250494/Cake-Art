import { TInput } from "@/utils/types";
import clsx from "clsx";

const Input = ({
  label,
  classNameLabel,
  id,
  type,
  value,
  onChange,
  classNameInput,
  placeholder,
}: TInput) => {
  return (
    <>
      <label htmlFor={id} className={classNameLabel}>
        {label}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={label || placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          "border border-gray/30 focus:outline-0 p-2 text-[18px] placeholder:text-[18px]",
          classNameInput,
        )}
      />
    </>
  );
};
export default Input;
