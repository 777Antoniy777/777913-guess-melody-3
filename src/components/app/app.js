import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  return (
    <WelcomeScreen
      errorsCount = {props.errorsCount}
    />
  );
};

App.defaultProps = {
  errorsCount: 3,
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
