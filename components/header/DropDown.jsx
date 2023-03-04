import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

const DropDown = ({
  btnName,
  clickedBtnName,
  options,
  handleOptionClick,
  handleClickBtn,
}) => {
  const renderOptions = () => {
    return (
      <div
        className={`${
          btnName === clickedBtnName ? "" : "hidden"
        } px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800`}
      >
        {options.map((optionItem, index) => {
          return (
            <Link
              key={`key_option_${index}`}
              href={optionItem.href}
              onClick={handleOptionClick}
              className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              {optionItem.name}
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative" onClick={handleClickBtn}>
      <button
        name={btnName}
        className="whitespace-nowrap flex gap-2 flex-row items-center w-full px-4 py-2 mt-2 text-md font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:hover:bg-gray-600 md:w-auto md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        {btnName}
        <FaAngleDown name={btnName} />
      </button>
      <div className="z-40 absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
        {renderOptions()}
      </div>
    </div>
  );
};

export default DropDown;
