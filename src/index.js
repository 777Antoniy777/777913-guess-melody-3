import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import questions from "./mocks/questions";
import App from "./components/app/app";

const Options = {
  ERRORS_COUNT: 3,
};

ReactDOM.render(
    <BrowserRouter>
      <App
        // properties
        errorsCount = {Options.ERRORS_COUNT}
        questions={ questions }
      />
    </BrowserRouter>,
    document.getElementById(`root`)
);
