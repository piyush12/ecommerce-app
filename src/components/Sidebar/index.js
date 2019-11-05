import React from "react";
import Paper from "../../reusableComponents/Paper";
import FilterBySize from "../../containers/filterSize";
import FilterByOrder from "../../containers/sortBy";

const Sidebar = () => {
  return (
    <Paper>
      <div className="filterby">
        {/* sort by */}
        <div className="filterby-row">
          <FilterByOrder />
        </div>
        {/*filter by sizes*/}
        <div className="filterby-row">
          <FilterBySize />
        </div>
      </div>
    </Paper>
  );
};

export default Sidebar;
