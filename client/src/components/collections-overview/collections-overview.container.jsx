import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "./../../redux/shop/shop.selectors";
import WithSpiner from "../with-spinner/with-spinner";
import CollectionOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpiner
)(CollectionOverview);

export default CollectionOverviewContainer;
