import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeatures } from "./actions/";
import { connect } from "react-redux";

const App = (props) => {
  console.log("App: props: ", props)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.storeProps.car.image} />
        <AddedFeatures car={props.storeProps.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={""} />
        <Total car={""} additionalPrice={""} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log('mapStateToProps: State: ',state);
  return {
    storeProps: state
  };
};
export default connect(mapStateToProps, {addFeatures})(App);
