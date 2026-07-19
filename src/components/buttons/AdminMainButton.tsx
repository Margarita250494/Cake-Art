import { TAdminMainButton } from "@/utils/types";

const AdminMainButton = ({
  disabled,
  typeButton,
  labelButton,
  onClick,
}: TAdminMainButton) => {
  return (
    <button
      type={typeButton}
      className="bg-black text-white text-[20px] p-2 cursor-pointer disabled:opacity-50 disabled:cursor-none disabled:pointer-events-none"
      disabled={disabled}
      onClick={onClick}
    >
      {labelButton}
    </button>
  );
};
export default AdminMainButton;
