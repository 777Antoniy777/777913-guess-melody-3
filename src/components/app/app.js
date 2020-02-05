import React from "react";
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  return (
    <WelcomeScreen
      // eslint-disable-next-line react/prop-types
      errorsCount = {props.errorsCount}
    />
  );
};

export default App;
