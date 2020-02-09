import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const onButtonClick = () => {};

  return (
    <WelcomeScreen
      errorsCount = {props.errorsCount}
      onButtonClick={ onButtonClick }
    />
  );
};

App.defaultProps = {
  errorsCount: 3,
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default App;
