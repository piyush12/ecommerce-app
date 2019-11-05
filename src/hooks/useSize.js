import React from "react";

const useSize = (label, value) => {
  const sizeInput = () => (
    <label>
      <input type="checkbox" value={value} onClick={() => handleSize(value)} />
      <span>{label}</span>
    </label>
  );

  return [sizeInput];
};

export default useSize;
