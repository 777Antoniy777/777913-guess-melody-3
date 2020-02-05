
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Options = {
  ERRORS_COUNT: 3,
};

ReactDOM.render(
    <App
      errorsCount = {Options.ERRORS_COUNT}
    />,
    document.getElementById(`root`)
);
