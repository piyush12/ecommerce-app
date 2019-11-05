import { connect } from "react-redux";
import FilterBySize from "../components/Filter/filterBySize";
import { filterBySize } from "../componentsDependencies/filter/action";
import { getFilterBySize } from "./selectors";

const mapState = state => ({
  filterSize: getFilterBySize(state)
});

const filterBySizeContainer = connect(
  mapState,
  { filterBySize }
)(FilterBySize);

export default filterBySizeContainer;
