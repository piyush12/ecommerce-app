import React from "react";
import Shortid from "shortid";
import SizeInput from "../../reusableComponents/SizeInput";

const sizes = ["XXL", "XL", "L", "Ml", "M", "S", "XS"];

const FilterBySize = ({ filterBySize, filterSize }) => {
  const handleSize = size => {
    filterBySize(size);
  };

  return (
    <div className="filterby-size">
      <h3>Sizes:</h3>
      <ul>
        {sizes.map(size => (
          <li key={Shortid.generate()}>
            <SizeInput
              value={size}
              label={size}
              handleSize={handleSize}
              checkedCurrent={filterSize}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBySize;
