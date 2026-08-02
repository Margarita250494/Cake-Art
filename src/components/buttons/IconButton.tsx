import React from "react";
import { IconType } from "react-icons";

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  Icon: IconType;
};
const IconButton = ({ handleClick, Icon }: Props) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer text-black duration-200 hover:text-link"
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};
export default IconButton;
