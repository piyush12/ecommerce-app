import React from "react";

const SizeInput = ({ value, label, handleSize, checkedCurrent, ...rest }) => {
  const isChecked = checkedCurrent.includes(value);
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        {...rest}
        onChange={() => handleSize(value)}
        checked={isChecked}
      />
      <span>{label}</span>
    </label>
  );
};

export default React.memo(SizeInput);
