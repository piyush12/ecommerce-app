import React from "react";
import Form from "react-bootstrap/Form";
import shortid from "shortid";

const sortOption = [
  {
    sortBy: "Highest to Lowest",
    val: "highPrice"
  },
  {
    sortBy: "Lowest to Highest",
    val: "lowestPrice"
  }
];

const FilterByOrder = props => {
  const sortBy = e => {
    props.sortBy(e.target.value);
  };
  return (
    <div className="sortby-input">
      <Form.Group controlId="formGridState">
        <Form.Label>Order By:</Form.Label>
        <Form.Control
          as="select"
          onChange={e => sortBy(e)}
          value={props.orderBy}
        >
          <option>Choose...</option>
          {sortOption.map(option => (
            <option value={option.val} key={shortid.generate()}>
              {option.sortBy}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default FilterByOrder;
