import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, removeFeature } from "./actions/";
import { connect } from "react-redux";
import reducer from "./reducers";

const App = (props) => {

  const handleRemoveFeature = (e) => {
    const item = props.storeProps.additionalFeatures.filter(
      (feature) => {
        return feature.id == e.target.id ? props.removeFeature(feature) : ""
      }
    );
  };

  const handleAddFeature = (event) => {
    event.preventDefault();
    const item = props.storeProps.additionalFeatures.filter((feature) => {
      // console.log("feature: ",);
    return feature.id == event.target.id ? props.addFeature(feature) : ""
    

    });
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.storeProps.car} />
        <AddedFeatures car={props.storeProps.car} removeFeature={handleRemoveFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.storeProps.additionalFeatures}
          addFeature={handleAddFeature}
        />
        <Total
          car={props.storeProps.car}
          additionalPrice={props.storeProps.additionalPrice}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("mapStateToProps: State: ", state);
  return {
    storeProps: state,
  };
};
export default connect(mapStateToProps, { addFeature, removeFeature })(App);
