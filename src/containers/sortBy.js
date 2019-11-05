import { connect } from "react-redux";
import FilterByOrder from "../components/Filter/filterByOrder";
import { sortBy } from "../componentsDependencies/filter/action";
import { getOrderBy } from "./selectors";

const mapState = state => ({
  orderBy: getOrderBy(state)
});

const filterByOrderContainer = connect(
  mapState,
  { sortBy }
)(FilterByOrder);

export default filterByOrderContainer;
