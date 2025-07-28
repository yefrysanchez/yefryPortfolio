import { useState } from "react";
import propTypes from "prop-types"

const FilterBtn = ({filter}) => {
  const [isChecked, setIsChecked] = useState(false);

  const id = filter.replace(/\s+/g, '-').toLowerCase(); // Create a unique ID based on the filter name

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <label htmlFor={id} className={`${isChecked ? "bg-shade2/50" : "bg-shade2/10 hover:bg-shade2/20"} cursor-none select-none transition-colors duration-200 px-4 py-1 inline-block rounded-md`}>{filter}</label>
    </div>
  );
};

export default FilterBtn;

FilterBtn.propTypes = {
    filter: propTypes.string.isRequired
}
