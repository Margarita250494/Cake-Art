import clsx from 'clsx'

const MenuButton = ({handelClick, isClicked}: {
  handelClick: () => void;
  isClicked: boolean
}) => {
  return (
    <button
      type="button"
      className="block w-7.5 h-7.5 cursor-pointer"
      onClick={handelClick}
    >
      <div
        className={clsx("w-full h-full flex  items-center duration-500" +
          " justify-center", isClicked ? 'gap-0 flex-row' : 'gap-2 flex-col')}
      >
        <span className={isClicked ? 'arrow-close' : "arrow"} />
        <span className={isClicked ? 'arrow-close' : "arrow"} />
        <span className={isClicked ? 'arrow-close' : "arrow"} />
      </div>

    </button>
  );
};
export default MenuButton;
